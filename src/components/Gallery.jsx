import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  X,
  Images,
} from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/img1.jpeg",
    title: "School Assembly",
    category: "Activities",
  },
  {
    src: "/images/gallery/img2.jpeg",
    title: "Cultural Activities",
    category: "Activities",
  },
  {
    src: "/images/gallery/img3.jpeg",
    title: "School Life",
    category: "Campus",
  },
  {
    src: "/images/gallery/img5.jpeg",
    title: "Student Activities",
    category: "Activities",
  },
  {
    src: "/images/gallery/img6.jpeg",
    title: "School Moments",
    category: "Campus",
  },
  {
    src: "/images/gallery/img7.jpeg",
    title: "Memorable Moments",
    category: "Events",
  },
  {
    src: "/images/gallery/img8.jpeg",
    title: "School Activities",
    category: "Activities",
  },
  {
    src: "/images/gallery/img9.jpeg",
    title: "Student Life",
    category: "Campus",
  },
  {
    src: "/images/gallery/img10.jpeg",
    title: "Science Fair",
    category: "Events",
  },
  {
    src: "/images/gallery/img11.jpeg",
    title: "Yoga Activities",
    category: "Activities",
  },
];

const categories = ["All", "Activities", "Events", "Campus"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  const openLightbox = (image) => {
    const index = filteredImages.findIndex(
      (item) => item.src === image.src
    );

    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredImages.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === filteredImages.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="min-h-screen bg-[#F5F8FC]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F2747] text-white">
        {/* Decorative shapes */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2563A6]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-[#F4B942]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Back button */}
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-[#F4B942] transition-colors cursor-pointer mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to School
          </button>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4B942]/10 border border-[#F4B942]/30 text-[#F4B942] text-xs font-bold uppercase tracking-wider mb-5">
              <Images className="w-4 h-4" />
              School Gallery
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Moments That
              <span className="block text-[#F4B942]">
                Make Us Proud.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Explore memorable moments from school activities,
              events, learning experiences, and everyday student life
              at Shri Tula Ram Public School.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2563A6] mb-2">
                Explore Our Memories
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2747]">
                School Life in Pictures
              </h2>
            </div>

            <p className="text-sm text-[#64748B] max-w-md lg:text-right">
              A glimpse into the learning, creativity, activities,
              and celebrations that shape our school community.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setSelectedIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0F2747] text-white shadow-md"
                      : "bg-white text-[#475569] border border-slate-200 hover:border-[#2563A6]/40 hover:text-[#2563A6]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredImages.map((image, index) => (
              <button
                key={image.src}
                onClick={() => openLightbox(image)}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-200 cursor-pointer text-left ${
                  index === 0 ? "lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0
                      ? "aspect-[4/5] h-full"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2747]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-[#F4B942]">
                      {image.category}
                    </p>

                    <h3 className="text-lg font-bold text-white mt-1">
                      {image.title}
                    </h3>
                  </div>

                  {/* View icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-[#0F2747] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <Images className="w-4 h-4" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <Images className="w-10 h-10 mx-auto text-slate-300" />

              <p className="mt-4 text-slate-500">
                No images available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && filteredImages[selectedIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-[#020817]/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close gallery"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F4B942] hover:text-[#0F2747] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].title}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />

            <div className="mt-4 text-center">
              <p className="text-[#F4B942] text-xs uppercase font-bold tracking-wider">
                {filteredImages[selectedIndex].category}
              </p>

              <h3 className="text-white text-lg sm:text-xl font-bold mt-1">
                {filteredImages[selectedIndex].title}
              </h3>

              <p className="text-slate-400 text-xs mt-1">
                {selectedIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#F4B942] hover:text-[#0F2747] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </main>
  );
}