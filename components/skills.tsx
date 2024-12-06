import { Progress } from "@/components/ui/progress";

export function Skills() {
  const skills = [
    { name: "Graphic Design", value: 85 },
    { name: "Web Development", value: 95 },
    { name: "App Development", value: 75 },
    { name: "SEO Development", value: 85 },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          Creative & Professional
          <br />
          Skills Experience
        </h2>
        <div className="max-w-2xl">
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
    </section>
  );
}
