import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              We are
              <br />
              Code x Sol
            </h1>
            <p className="text-xl text-gray-600 mb-8">Your Dream, We Build</p>
            <p className="text-gray-600 md:text-lg mb-8 break-words">
              We are a creative Software Development agency with a mission to
              create the most beautiful and user-friendly products that help
              businesses grow.
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

          <iframe
            className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
            src="https://lottie.host/embed/34b32f1f-0fa2-4f50-8123-518810565f99/8k9aApXNgF.lottie"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
