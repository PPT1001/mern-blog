import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor";

export default function EditPost() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getPost() {
      const response = await fetch(`http://localhost:4000/post/${id}`, {
        credentials: "include",
      });
      const data = await response.json();
      setTitle(data.title);
      setImage(data.image);
      setSummary(data.summary);
      setContent(data.content);
    }
    getPost();
  }, []);

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  async function updatePost(ev) {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    console.log(id);
    if (image.length > 0) {
      data.set("image", image[0]);
    }
    console.log(data);
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/updatePost", {
      method: "PUT",
      body: data,
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    }
  }

  return (
    <form onSubmit={updatePost}>
      <input
        type="title"
        placeholder="Title"
        value={title}
        onChange={(ev) => setTitle(ev.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        maxLength={200}
        onChange={(ev) => setSummary(ev.target.value)}
      />
      <input type="file" onChange={(ev) => setImage(ev.target.files)} />
      <Editor onChange={setContent} value={content} />
      <button style={{ marginTop: "10px" }}>Update Post</button>
    </form>
  );
}
