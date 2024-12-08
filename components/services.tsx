import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, GlobeIcon, SmartphoneIcon, PenToolIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <CodeIcon className="w-8 h-8 text-primary" />,
      title: "UI/UX",
      description:
        "User-centric design that enhances user experience and satisfaction",
    },
    {
      icon: <GlobeIcon className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Custom web solutions tailored to your business needs",
    },
    {
      icon: <SmartphoneIcon className="w-8 h-8 text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: <PenToolIcon className="w-8 h-8 text-primary" />,
      title: "Graphic Design",
      description: "Creative designs that capture your brand&apos;s essence",
    },
  ];

  return (
    <section className="py-12 lg:h-screen lg:flex lg:items-center bg-blue-100">
      <div className="container mx-auto px-4 flex flex-col lg:gap-10">
        <h2 className="text-center text-3xl font-bold mb-12 ">
          We Provide Best Solutions
          <br />
          <span className="border-b-4 border-blue-600 pb-2">
            For Your Business
          </span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-primary/20">
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
