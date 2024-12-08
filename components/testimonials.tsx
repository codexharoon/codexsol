import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      name: "Quality Service",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/avatar1.jpg",
    },
    {
      name: "Very Much Helpful",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/avatar2.jpg",
    },
    {
      name: "Excellent Support",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      image: "/avatar3.jpg",
    },
  ];

  return (
    <section className="p-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          What Our Client Say
          <br />
          About Ourself
        </h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="font-semibold mb-2">{testimonial.name}</h3>
                    <div className="flex justify-center mb-4">
                      {Array(testimonial.rating)
                        .fill(null)
                        .map((_, i) => (
                          <StarIcon
                            key={i}
                            className="w-5 h-5 text-primary fill-current"
                          />
                        ))}
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
