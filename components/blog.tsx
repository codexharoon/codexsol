import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Blog() {
  const posts = [
    {
      title: "Designer Focuses on creation & implementation",
      date: "20 January 2024",
      image: "/blog.png",
    },
    {
      title: "The importance of user experience in web design",
      date: "15 February 2024",
      image: "/blog.png",
    },
    {
      title: "Latest trends in responsive web development",
      date: "10 March 2024",
      image: "/blog.png",
    },
  ];

  return (
    <section
      className="pt-24 pb-12 lg:h-screen lg:flex lg:items-center bg-gradient-to-l from-blue-400"
      id="blog"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Every Single Update
          <br />
          News & Blog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-600 mb-2">{post.date}</p>
                <h3 className="font-semibold mb-4">{post.title}</h3>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary/10"
                >
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
