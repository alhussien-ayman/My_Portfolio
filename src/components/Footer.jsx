import React from "react";
import { ButtonPrimary } from "./Button";
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://www.github.com/codewithsadee-org",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/codewithsadee",
  },
  {
    label: "Twitter X",
    href: "https://x.com/codewithsadee_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/codewithsadee",
  },
  {
    label: "CodePen",
    href: "https://codepen.io/codewithsadee",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 reveal-up">
          <div className="mb-10">
            <h2 className=" text-left headline-1 mb-8 lg:max-w-[15ch]">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto :alhussienaymanhanafy@gmail.com"
              label="Start project"
              icon="chevron_right"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20 reveal-up">
            <div>
              <p className="mb-2">Sitemap</p>
              <ul>
                {" "}
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>
              <ul>
                {" "}
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex ites-center justify-between pt-10 mb-8 ">
          <a href="" className="">
            <img
              src="/images/logo.png"
              width={40}
              height={40}
              alt="Logo"
             
            />
          </a>
          <p className="text-zinc-400 text-sm ">
            &copy; 2025
            <span className="text-zinc-200 reveal-up"> Alhussien Ayman</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
