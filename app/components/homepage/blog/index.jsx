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

    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
    <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

    <div className="flex justify-center -translate-y-[1px]">
      <div className="w-3/4">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
      </div>
    </div>

    <div className="flex justify-center my-5 lg:py-8">
      <div className="flex  items-center">
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
          Projects
        </span>
        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
      </div>
    </div>

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
  </div>
  );
}
