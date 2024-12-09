import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      url: "www.facebook.com",
      icon: <FaFacebookF />,
    },
    {
      name: "Twitter",
      url: "www.twitter.com",
      icon: <FaTwitter />,
    },
    {
      name: "Linkedin",
      url: "www.linkedin.com",
      icon: <FaLinkedinIn />,
    },
    {
      name: "Instagram",
      url: "www.instagram.com",
      icon: <FaInstagram />,
    },
  ];

  const sections = [
    {
      title: "Logo",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-basic-commercial font-light">
              <span className="text-[#909090]">Call or Text:</span> 123456
            </p>
            <p className="font-basic-commercial font-light min-w-52">
              <span className="text-[#909090]">Email:</span> company@email.com
            </p>
          </div>
          <div className="flex space-x-3 mt-2">
            {socialLinks.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className="bg-accent p-2 rounded-full h-auto w-auto hover:bg-background"
              >
                {link.icon}
                <span className="sr-only">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Other",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Live Support", href: "/support" },
      ],
    },
    {
      title: "Others",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Live Support", href: "/support" },
      ],
    },
    {
      title: "Address",
      content: (
        <p className="font-basic-commercial text-[#909090] font-light w-64">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s.
        </p>
      ),
    },
  ];

  return (
    <footer className="bg-inherit text-black py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-4">
        {sections.map((section, index) => (
          <div key={index} className={`flex flex-col`}>
            <h3
              className={`font-basic-commercial mb-5 font-bold ${section.title === "Logo" ? "font-lato font-bold text-3xl" : "font-plantin font-medium text-xl"}`}
            >
              {section.title}
            </h3>
            {section.links ? (
              <ul className="font-basic-commercial font-light text-[#909090] space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link key={idx} href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              section.content
            )}
          </div>
        ))}
      </div>
      <p className="text-center mt-20 text-sm font-poppins font-medium">
        © Copyright 2022 by DPI_MEDIA - All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
