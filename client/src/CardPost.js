import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  _id,
  title,
  summary,
  content,
  image,
  createdAt,
  author,
}) {
  return (
    // <div className="post">
    //   <div className="image">
    //     <img src={`http://localhost:4000/${image}`} alt="blog" />
    //   </div>
    //   <div className="texts">
    //     <h2>{title}</h2>
    //     <p className="info">
    //       <span className="Author">{author.username}</span>
    //       <time>{format(new Date(createdAt), "MMMM d, yyyy HH:mm")}</time>
    //     </p>
    //     <p className="summary">{summary}</p>
    //     <Link to={`/post/${_id}`}>
    //       <div className="read">Read More</div>
    //     </Link>
    //   </div>
    // </div>

    <div className="card-panel">
      <div className="text-wrapper">{title}</div>
      <div className="div">
        <time>{format(new Date(createdAt), "MMMM d, yyyy")}</time>
      </div>
      <Link to={`/post/${_id}`}>
        <div className="text-wrapper-2">Read more</div>
      </Link>
      <img
        className="image"
        src={`http://localhost:4000/${image}`}
        alt="blog"
      />
      <p className="p">{summary}</p>
    </div>
  );
}
