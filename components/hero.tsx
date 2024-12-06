import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              We are
              <br />
              Code X Sol
            </h1>
            <p className="text-xl text-gray-600 mb-8">Your Dream, We Build</p>
            <p className="text-gray-600 mb-8">
              We are a creative web design agency with a mission to create the
              most beautiful and user-friendly websites that help businesses
              grow.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-illustration.svg"
              alt="Hero Illustration"
              width={600}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
