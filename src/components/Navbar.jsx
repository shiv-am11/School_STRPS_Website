import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

import Button from "./Button";
import { navLinks, schoolDetails } from "../data/schoolData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section while scrolling
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = [
  "home",
  "about",
  "academics",
  "infrastructure",
  "activities",
  "admissions",
  "updates",
  "contact",
];
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    handleActiveSection();

    return () => window.removeEventListener("scroll", handleActiveSection);
  }, []);

  const sectionMap = {
  "/": "home",
  "/about": "about",
  "/academics": "academics",
  "/infrastructure": "infrastructure",
  "/activities": "activities",
  "/admissions": "admissions",
  "/updates": "updates",
  "/contact": "contact",
};
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Notification Strip */}
      <div className="bg-[#0F2747] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1 bg-[#F4B942] text-[#0F2747] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Admissions 2026–27
            </span>

            <span className="hidden md:inline text-slate-300">|</span>

            <span className="text-slate-200 font-medium">
              CBSE Affiliated Secondary School • Delhi
            </span>

            <span className="hidden lg:inline text-slate-400">
              ({schoolDetails.address.split(",")[0]},{" "}
              {schoolDetails.address.split(",")[1]})
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a
              href={`tel:${schoolDetails.phones[0].replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[#F4B942] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B942]" />

              <span className="hidden sm:inline">
                {schoolDetails.phoneFormatted}
              </span>
            </a>

            <span className="hidden sm:inline text-slate-600">•</span>

            <a
              href={`mailto:${schoolDetails.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#F4B942] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F4B942]" />

              <span>{schoolDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-md py-3 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-[#0F2747] flex items-center justify-center overflow-hidden shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-200">
              <img
                src="/images/logo/school-logo.png"
                alt="Shri Tula Ram Public School"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            <div>
              <div className="text-base sm:text-lg font-bold text-[#0F2747] leading-snug tracking-tight group-hover:text-[#2563A6] transition-colors">
                Shri Tula Ram Public School
              </div>

              <div className="text-[11px] font-medium text-[#64748B] flex items-center gap-1.5">
                <span>CBSE Affiliated</span>

                <span className="w-1 h-1 rounded-full bg-slate-300"></span>

                <span>Rama Vihar, Delhi</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              // Convert /about -> about
              const sectionId = sectionMap[link.path];

              const isActive = activeSection === sectionId;

              return (
                <button
                  key={link.path}
                  onClick={() => scrollToSection(sectionId)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150  cursor-pointer ${
                    isActive
                      ? "text-[#0F2747] bg-slate-100 font-semibold"
                      : "text-[#475569] hover:text-[#0F2747] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              onClick={() => scrollToSection("admissions")}
              variant="primary"
              size="md"
              icon={ChevronRight}
              className="shadow-sm font-bold"
            >
              Apply for Admission
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection("admissions")}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#F4B942] text-[#0F2747] text-xs font-bold"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F2747] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu */}
          <div className="relative w-full max-w-sm ml-auto h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto p-6">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0F2747] flex items-center justify-center text-white font-bold text-sm">
                    STR
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#0F2747]">
                      Navigation Menu
                    </p>

                    <p className="text-xs text-[#64748B]">
                      Shri Tula Ram Public School
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const sectionId = sectionMap[link.path];

                  const isActive = activeSection === sectionId;

                  return (
                    <button
                      key={link.path}
                      onClick={() => scrollToSection(sectionId)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#0F2747] text-white font-semibold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span>{link.name}</span>

                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive
                            ? "text-[#F4B942]"
                            : "text-slate-400"
                        }`}
                      />
                    </button>
                  );
                })}

                {/* Mandatory Disclosure */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    alert(
                      "Mandatory Disclosure page will be added later."
                    );
                  }}
                  className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100"
                >
                  <span className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#2563A6]" />
                    Mandatory Disclosure
                  </span>

                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Button
                onClick={() => scrollToSection("admissions")}
                variant="primary"
                size="lg"
                className="w-full font-bold"
                icon={ChevronRight}
              >
                Apply for Admission 2026–27
              </Button>

              <div className="text-xs text-center text-slate-500 space-y-1">
                <p>Helpline: {schoolDetails.phoneFormatted}</p>

                <p>
                  Rama Vihar, Mohd. Pur Majri, Delhi – 110081
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}