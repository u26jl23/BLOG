import posts from "../data/posts.js";
import { Link } from "react-router-dom";

export default function Main() {

  return (
    <main>
        <h1>Welcome to R1C0L's Blog!</h1>
        <p className="welcome">
          This is my personal corner on the internet. I want to use this site to post
          thoughts, updates, and anything I find interesting.
        </p>
        <h5>Latest Post: </h5>
        {posts.slice(0, 1).map((post) => (
          <article key={post.title}>
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <p>{post.content}</p>
          </article>
        ))}
        <p className="to-posts">
          <Link to="/posts">View all posts</Link>
        </p>
    </main>
  )
}