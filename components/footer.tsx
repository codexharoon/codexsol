import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Code Station21"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Code Station21</span>
            </Link>
            <p className="text-gray-600 mb-4">
              We are a creative web design agency with a mission to create
              beautiful websites.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                <InstagramIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#FF7575]">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Let's be friends! Get our latest updates.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your Email" />
              <Button className="bg-[#FF7575] hover:bg-[#FF7575]/90">
                Subscribe
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our Members</h3>
            <div className="flex -space-x-2">
              <Image
                src="/member1.jpg"
                alt="Team Member"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/member2.jpg"
                alt="Team Member"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div className="border-t pt-6 text-center text-gray-600">
          © 2024 Code Station21. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
