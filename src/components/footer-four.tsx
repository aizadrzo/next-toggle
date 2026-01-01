import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Our Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
];

export default function FooterSection() {
  return (
    <footer className="bg-background border-b py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="order-last flex items-center gap-3 md:order-first">
            <Link href="#" aria-label="go home">
              <Image
                src="/images/brand/logo-light.svg"
                alt="Logo"
                width={80}
                height={40}
                className="object-contain"
              />
            </Link>
            <span className="text-muted-foreground block text-center text-sm">
              © {new Date().getFullYear()} Toggle Solutions, All rights reserved
            </span>
          </div>

          <div className="order-first flex flex-wrap gap-x-6 gap-y-4 md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
