import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";

export function Skills() {
  const skills = [
    { name: "Graphic Design", value: 85 },
    { name: "Web Development", value: 95 },
    { name: "App Development", value: 75 },
    { name: "SEO Development", value: 85 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Creative & Professional
          <br />
          Skills Experience
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div className="w-full lg:w-1/2">
            <p className="text-gray-600 border-l-4 border-blue-600 pl-2 md:text-lg mb-8 break-words">
              We are a remote developer agency based in Pakistan, working with
              clients around the world. As passionate designers & developer, we
              love building website, mobile app and UI/UX that are easy to use.
            </p>
            <Button size={"lg"} className="mb-8 lg:mb-0">
              Hire Us
            </Button>
          </div>

          <div className="w-full lg:w-1/2 max-w-2xl">
            {skills.map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <Progress
                  value={skill.value}
                  className="h-2 [&>div]:bg-primary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
