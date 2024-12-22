import { Button } from "@/components/ui/button";
import Image from "next/image";

export function About() {
  return (
    <section
      className="py-12 lg:h-screen lg:flex lg:items-center bg-gradient-to-l from-blue-400"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-6">
                Let&apos;s Something
                <br />
                Know Great About Us
              </h2>

              <p className="text-gray-600 border-l-4 border-blue-600 pl-2 md:text-lg mb-8 break-words">
                We are a group of professional software developer team that run
                by enthusiast for coding and design.
              </p>
            </div>
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
          </div>
          <div className="relative">
            <Image
              src="/about-illustration.png"
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
