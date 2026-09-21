import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

import Button from "./Button";
import { navLinks, schoolDetails } from "../data/schoolData";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // -----------------------------------------
  // NAVBAR SCROLL EFFECT
  // -----------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -----------------------------------------
  // ACTIVE SECTION
  // -----------------------------------------
  useEffect(() => {
    if (location.pathname === "/gallery") {
      setActiveSection("gallery");
      return;
    }

    const handleActiveSection = () => {
      const sections = [
        "home",
        "about",
        "academics",
        "infrastructure",
        "admissions",
        "updates",
        "contact",
      ];

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (
          section &&
          section.offsetTop <= scrollPosition
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    handleActiveSection();

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );
    };
  }, [location.pathname]);

  // -----------------------------------------
  // SCROLL TO SECTION
  // -----------------------------------------
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    setMobileMenuOpen(false);
  };

  // -----------------------------------------
  // HANDLE NAVIGATION
  // -----------------------------------------
  const handleNavClick = (link) => {
    // Gallery → separate page
    if (link.path === "/gallery") {
      navigate("/gallery");
      setMobileMenuOpen(false);
      return;
    }

    // Mandatory Disclosure → PDF
    if (link.path === "/mandatory-disclosure") {
      window.open(
        "/docs/Mandatory-Disclosure.pdf",
        "_blank",
        "noopener,noreferrer"
      );

      setMobileMenuOpen(false);
      return;
    }

    // Normal section navigation
    const sectionId =
      link.path === "/"
        ? "home"
        : link.path.replace("/", "");

    scrollToSection(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">

      {/* =========================================
          TOP STRIP
      ========================================== */}
      <div className="bg-[#0F2747] text-white text-xs py-2 px-3 sm:px-5 border-b border-white/10">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-4">

          <div className="flex items-center gap-2.5 flex-wrap">

            <span className="inline-flex items-center gap-1 bg-[#F4B942] text-[#0F2747] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Admissions 2026-27
            </span>

            <span className="hidden md:inline text-slate-300">
              |
            </span>

            <span className="text-slate-200 font-medium">
              Shri Tula Ram Public School• Delhi
            </span>

            <span className="hidden lg:inline text-slate-400">
              ({schoolDetails.address.split(",")[0]},{" "}
              {schoolDetails.address.split(",")[1]})
            </span>

          </div>

          <div className="flex items-center gap-4 text-slate-300 shrink-0">

            <a
              href={`tel:${schoolDetails.phones[0].replace(
                /\s+/g,
                ""
              )}`}
              className="flex items-center gap-1.5 hover:text-[#F4B942] transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4B942]" />

              <span className="hidden sm:inline">
                {schoolDetails.phoneFormatted}
              </span>
            </a>

            <span className="hidden sm:inline text-slate-600">
              •
            </span>

            <a
              href={`mailto:${schoolDetails.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#F4B942] transition-colors cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#F4B942]" />

              <span>
                {schoolDetails.email}
              </span>
            </a>

          </div>
        </div>
      </div>

      {/* =========================================
          MAIN NAVBAR
      ========================================== */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-md py-3 border-b border-slate-200/80"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
      >

        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 flex items-center justify-between gap-5">

          {/* =========================================
              LOGO + SCHOOL NAME
          ========================================== */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
          >

            <div className="w-11 h-11 rounded-xl bg-[#0F2747] flex items-center justify-center overflow-hidden shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-200 shrink-0">

              <img
                src="/images/gallery/logo.jpeg"
                alt="Shri Tula Ram Public School"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />

            </div>

            <div className="w-[210px] shrink-0">

              <div className="text-[17px] sm:text-[18px] font-bold text-[#0F2747] leading-[1.15] tracking-tight whitespace-nowrap group-hover:text-[#2563A6] transition-colors">
                Shri Tula Ram Public School
              </div>

              <div className="text-[11px] font-medium text-[#64748B] flex items-center gap-1.5 mt-1 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0" />

                <span>
                  Rama Vihar, Delhi
                </span>

              </div>

            </div>
          </button>

          {/* =========================================
              DESKTOP NAV
          ========================================== */}
          <div className="hidden xl:flex items-center justify-center gap-0.5 flex-1">

            {navLinks.map((link) => {

              const isGallery =
                link.path === "/gallery";

              const isMandatoryDisclosure =
                link.path === "/mandatory-disclosure";

              const sectionId =
                link.path === "/"
                  ? "home"
                  : link.path.replace("/", "");

              const isActive =
                activeSection ===
                (
                  isGallery
                    ? "gallery"
                    : isMandatoryDisclosure
                    ? "mandatory-disclosure"
                    : sectionId
                );

              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-150 cursor-pointer ${
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

          {/* =========================================
              DESKTOP CTA
          ========================================== */}
          <div className="hidden sm:flex items-center shrink-0">

            <Button
              onClick={() =>
                scrollToSection("admissions")
              }
              variant="primary"
              size="md"
              icon={ChevronRight}
              className="shadow-sm font-bold whitespace-nowrap cursor-pointer"
            >
              Apply for Admission
            </Button>

          </div>

          {/* =========================================
              MOBILE NAV
          ========================================== */}
          <div className="flex xl:hidden items-center gap-2">

            <button
              onClick={() =>
                scrollToSection("admissions")
              }
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#F4B942] text-[#0F2747] text-xs font-bold cursor-pointer"
            >
              Apply
            </button>

            <button
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
              className="p-2 rounded-lg text-[#0F2747] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
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

      {/* =========================================
          MOBILE DRAWER
      ========================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[96px] z-50 xl:hidden">

          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          />

          {/* MENU */}
          <div className="relative w-full max-w-sm ml-auto h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto p-6">

            <div>

              {/* HEADER */}
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
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

              </div>

              {/* MOBILE LINKS */}
              <div className="py-4 space-y-1">

                {navLinks.map((link) => {

                  const isGallery =
                    link.path === "/gallery";

                  const isMandatoryDisclosure =
                    link.path === "/mandatory-disclosure";

                  const sectionId =
                    link.path === "/"
                      ? "home"
                      : link.path.replace("/", "");

                  const isActive =
                    activeSection ===
                    (
                      isGallery
                        ? "gallery"
                        : isMandatoryDisclosure
                        ? "mandatory-disclosure"
                        : sectionId
                    );

                  return (
                    <button
                      key={link.path}
                      onClick={() =>
                        handleNavClick(link)
                      }
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#0F2747] text-white font-semibold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >

                      <span>
                        {link.name}
                      </span>

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

              </div>
            </div>

            {/* BOTTOM CTA */}
            <div className="pt-6 border-t border-slate-100 space-y-3">

              <Button
                onClick={() =>
                  scrollToSection("admissions")
                }
                variant="primary"
                size="lg"
                className="w-full font-bold cursor-pointer"
                icon={ChevronRight}
              >
                Apply for Admission 2026–27
              </Button>

              <div className="text-xs text-center text-slate-500 space-y-1">

                <p>
                  Helpline:{" "}
                  {schoolDetails.phoneFormatted}
                </p>

                <p>
                  Rama Vihar, Mohd. Pur Majri,
                  Delhi - 110081
                </p>

              </div>

            </div>

          </div>
        </div>
      )}
    </header>
  );
}