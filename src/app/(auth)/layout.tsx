/** @format */
"use client";
import Link from "next/link";
//to determine if a link is active ,next js provides us with a usePathname Hook
//rename layout.tsx to template.tsx beacuse the other links save state of input
import { usePathname } from "next/navigation";
import { useState } from "react";
//Styling active links
const navLinks = [
  { name: "Register", href: "/Register" },

  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgotpassword" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          // the className here should be styled in some css or smth
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold" : "font-semi-bold"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
