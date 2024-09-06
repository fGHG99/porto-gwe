import BlogCard from './blog-card';

export default function HomePage() {
  // Array of blog data
  const blogs = [
    {
      id: 1,
      title: "Web Bucket List",
      description: "Web ini aku buat untuk menampun semua hal yang ingin dilakukan dan ingin di capai dalam hidup.",
      coverImage: "/bucketlist.png",
      reactionsCount: 12,
      commentsCount: 2,
      readingTime: 7,
    },
    {
      id: 2,
      title: "Web IMDB Scraping",
      description: "Web ini adalah web yang menampilkan hasil scraping dari website IMDB",
      coverImage: "/imdb.png",
      reactionsCount: 60,
      commentsCount: 5,
      readingTime: 8,
    },
    {
      id: 3,
      title: "Notion Clone",
      description: "Web ini saya buat untuk meng-clone website notion yang memiliki fungsi dan fitur yang hampir mirip",
      coverImage: "/clone.png",
      reactionsCount: 100,
      commentsCount: 10,
      readingTime: 20,
    },
    {
      id: 4,
      title: "Game Whisper of The Unseen",
      description: "Ini adalah project game pertama yang saya buat dengan menggunakan Unity bersama tim saya untuk tugas akhir MPRPL",
      coverImage: "/game.png",
      reactionsCount: 75,
      commentsCount: 5,
      readingTime: 6,
    },
    // Add more blogs as needed
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          coverImage={blog.coverImage}
          reactionsCount={blog.reactionsCount}
          commentsCount={blog.commentsCount}
          readingTime={blog.readingTime}
        />
      ))}
    </div>
  );
}
