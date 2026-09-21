import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

import { schoolDetails, navLinks } from "../data/schoolData";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#09182C] pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* School Brand */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-1 shadow-md">
                <img
                  src="/images/logo/school-logo.png"
                  alt="Shri Tula Ram Public School"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold leading-snug tracking-tight text-white">
                  Shri Tula Ram Public School
                </h3>

                <p className="text-xs font-semibold uppercase tracking-wide text-[#F4B942]">
                  Sanctuary of Empowerment
                </p>
              </div>
            </div>

            <p className="pr-4 text-sm leading-relaxed text-slate-300">
              A premier School in Rama Vihar,
              Delhi, fostering intellectual rigor, ethical values, and joyful
              lifelong learning.
            </p>

            {/* CBSE Badge */}
            {/* <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300">
              <ShieldCheck className="h-4 w-4 text-[#F4B942]" />

              <span>
                CBSE Affiliation No: {schoolDetails.affiliationNo}
                {" • "}
                Code: {schoolDetails.schoolCode}
              </span>
            </div> */}

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">

              <a
                href={schoolDetails.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-xs font-bold text-slate-300 transition-all duration-200 hover:bg-[#F4B942] hover:text-[#0F2747]"
              >
                IG
              </a>

              <a
                href={schoolDetails.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-sm font-bold text-slate-300 transition-all duration-200 hover:bg-[#2563A6] hover:text-white"
              >
                f
              </a>

              <a
                href={schoolDetails.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-all duration-200 hover:bg-emerald-500 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4B942]">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">
              {navLinks.slice(0, 6).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="inline-block transition-all duration-150 hover:translate-x-1 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4 lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4B942]">
              Information
            </h4>

            <ul className="space-y-2 text-sm text-slate-300">

              <li>
                <Link
                  to="/mandatory-disclosure"
                  className="inline-block transition-colors hover:text-white"
                >
                  Mandatory Disclosure
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="inline-block transition-colors hover:text-white"
                >
                  Campus Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/updates"
                  className="inline-block transition-colors hover:text-white"
                >
                  Notices & Circulars
                </Link>
              </li>

              <li>
                <Link
                  to="/admissions"
                  className="inline-block transition-colors hover:text-white"
                >
                  Admission Procedure
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="inline-block transition-colors hover:text-white"
                >
                  Locate Campus
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4B942]">
              Contact School
            </h4>

            <ul className="space-y-3 text-sm text-slate-300">

              {/* Address */}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4B942]" />

                <span>{schoolDetails.address}</span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#F4B942]" />

                <div className="flex flex-wrap gap-2">
                  <a
                    href={`tel:${schoolDetails.phones[0].replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {schoolDetails.phones[0]}
                  </a>

                  <span>/</span>

                  <a
                    href={`tel:${schoolDetails.phones[1].replace(/\s+/g, "")}`}
                    className="transition-colors hover:text-white"
                  >
                    {schoolDetails.phones[1]}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#F4B942]" />

                <a
                  href={`mailto:${schoolDetails.email}`}
                  className="truncate transition-colors hover:text-white"
                >
                  {schoolDetails.email}
                </a>
              </li>

              {/* Timings */}
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-[#F4B942]" />

                <span>{schoolDetails.timings}</span>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-slate-400 sm:flex-row">

          <p>
            © 2026 Shri Tula Ram Public School. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <Link
              to="/mandatory-disclosure"
              className="transition-colors hover:text-slate-200"
            >
              CBSE Mandatory Disclosure
            </Link>

            <span>•</span>

            <Link
              to="/contact"
              className="transition-colors hover:text-slate-200"
            >
              Contact Us
            </Link>

            <span>•</span>

            <span className="text-slate-500">
              Delhi - 110081
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}