export default function Posts(){
    const posts = [
        {
            title: "First Post", 
            date: "April 4, 2026",
            content: "This is the first sample post on the Posts page. Later, this page can show more complete post previews or even full post content."
        }, {
            tilte: "Another Update",
            date: "April 4, 2026",
            content: "This second post preview helps the Posts page look more like a real collection of entries."
        }
    ]

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