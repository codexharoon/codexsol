import Image from "next/image";

export function Clients() {
  const clients = [
    "/client1.svg",
    "/client2.svg",
    "/client3.svg",
    "/client4.svg",
    "/client5.svg",
    "/client6.svg",
    "/client7.svg",
    "/client8.svg",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client}
              alt="Client Logo"
              width={120}
              height={60}
              className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
