import { Button } from "@/components/ui/button";
import Image from "next/image";

export function About() {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Let's Something
            <br />
            Know Great About Us
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>High Performance</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Best Quality Work</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Dedicated Support</span>
              </li>
            </ul>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/about-illustration.svg"
              alt="About Us Illustration"
              width={500}
              height={400}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
