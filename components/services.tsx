import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, GlobeIcon, SmartphoneIcon, PenToolIcon } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <CodeIcon className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description:
        "We create responsive websites that work seamlessly across all devices",
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
      description: "Creative designs that capture your brand's essence",
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">
          We Provide Best Solutions
          <br />
          For Your Business
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
