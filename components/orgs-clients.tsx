import Image from "next/image";

export function OrgsClients() {
  const orgsClients = [
    "/org-client1.png",
    "/org-client2.png",
    "/org-client3.png",
    "/org-client4.png",
    "/org-client5.png",
    "/org-client6.png",
    "/org-client7.png",
    "/org-client8.png",
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center p-12">
          {orgsClients.map((client, index) => (
            <Image
              key={index}
              src={client}
              alt="Client Logo"
              width={120}
              height={60}
              className="w-full h-10 object-contain grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
