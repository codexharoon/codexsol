import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      image: "/project1.jpg",
      title: "Web Development",
      category: "web",
    },
    {
      image: "/project2.jpg",
      title: "Web Development",
      category: "web",
    },
    {
      image: "/project3.jpg",
      title: "Web Development",
      category: "web",
    },
    {
      image: "/project4.jpg",
      title: "Web Development",
      category: "web",
    },
  ];

  return (
    <section className="py-12" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Latest Project That
          <br />
          Recently Done
        </h2>
        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Categories</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="app">App Development</TabsTrigger>
            <TabsTrigger value="design">Graphic Design</TabsTrigger>
          </TabsList>
          <TabsContent
            value="all"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
