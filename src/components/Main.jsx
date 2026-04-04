export default function Main() {
  const posts = [
    {
      title: "Update",
      date: "April 1, 2026",
      content: "I am currently building this website step by step. Right now, I am working on the homepage structure and learning how blog content should be organized."
    }
  ]

  return (
    <main>
        <h1>Welcome to R1C0L's Blog!</h1>
        <p className="welcome">
          This is my personal corner on the internet. I want to use this site to post
          thoughts, updates, and anything I find interesting.
        </p>
        {posts.map((post) => (
          <article key={post.title}>
            <h2>{post.title}</h2>
            <small>{post.date}</small>
            <p>{post.content}</p>
          </article>
        ))}
    </main>
  )
}