import { useEffect, useState } from "react";
import Post from "../Post";
import MainPost from "../MainPost";
import CardPost from "../CardPost";
import image from "../assets/croods.png";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((res) =>
      res.json().then((data) => {
        setPosts(data);
      })
    );
  }, []);
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <h1>Make better coffee</h1>
          <p>Why learn how to blog?</p>
        </div>
        <img src={image} alt="Hero Image" className="hero-image" />
      </div>
      {/* Only take the first post */}
      {posts.length > 0 && <MainPost {...posts[0]} />}
      <div className="card-row">
        {/* Only take the posts after the first one */}
        {posts.slice(0).map((post) => (
          <CardPost key={post._id} {...post} />
        ))}
      </div>
      {/* {posts.length > 0 &&
        posts.map((post) => <Post key={post._id} {...post} />)} */}
    </>
  );
}
