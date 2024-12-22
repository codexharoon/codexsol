import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section
      className="pt-24 pb-12 lg:h-screen lg:flex lg:items-center bg-gradient-to-l from-blue-400"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">
          Do You Have Any Projects
          <br />
          Hit Say Hello
        </h2>
        <div className="max-w-xl mx-auto">
          <div className="flex gap-4 mb-4 space-y-6 flex-col">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button className="w-full bg-[#0076BE] hover:bg-[#0076BE]/90">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
