import posts from "../data/posts.js";

export default function Posts(){
    return (
        <main>
            <h1>Posts</h1>
            <p>
                This page will contain all blog posts.
            </p>
            {posts.map((post)=>(
                <article key={post.title}>
                    <h2>{post.title}</h2>
                    <small>{post.date}</small>
                    <p>{post.content}</p>
                </article>
            ))}
        </main>
    )
}