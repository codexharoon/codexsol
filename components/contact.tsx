import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">
          Do You Have Any Projects
          <br />
          Hit Say Hello
        </h2>
        <div className="max-w-xl mx-auto">
          <div className="flex gap-4 mb-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
          </div>
          <Button className="w-full bg-[#0076BE] hover:bg-[#0076BE]/90">
            Send Email
          </Button>
        </div>
      </div>
    </section>
  );
}
