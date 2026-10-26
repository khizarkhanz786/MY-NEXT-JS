
import React from "react";
import axios from "axios";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  brand?: string;
  discountPercentage: number;
}

const Home = async () => {
  const response = await axios.get(
    "https://dummyjson.com/products?limit=8"
  );

  const products: Product[] = response.data.products;

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#171717]">
      {/* Announcement Bar */}
      <div className="bg-[#111111] px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300 sm:text-xs">
        Discover better products. Keep it simple.
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em]"
          >
            MONO<span className="text-neutral-400">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <Link href="/" className="text-black">
              Home
            </Link>
            <a
              href="#collection"
              className="transition hover:text-black"
            >
              Collection
            </a>
            <a
              href="#about"
              className="transition hover:text-black"
            >
              About
            </a>
          </nav>

          <Link
            href="#collection"
            className="flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-xs font-semibold text-white transition hover:bg-neutral-700 sm:text-sm"
          >
            Explore Store
            <span>↗</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-7 sm:pt-10 lg:px-8 lg:pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-[#111111]">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/[0.07] sm:h-[450px] sm:w-[450px]" />
          <div className="pointer-events-none absolute -right-5 -top-10 h-64 w-64 rounded-full border border-white/[0.07] sm:h-[350px] sm:w-[350px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="relative z-10 grid min-h-[440px] items-center gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:px-14 lg:px-20 lg:py-20">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 border border-white/15 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-300">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                The MONO collection
              </div>

              <h1 className="max-w-2xl text-4xl font-medium leading-[1.12] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Less noise.
                <br />
                <span className="text-neutral-400">
                  Better choices.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
                Explore a carefully selected collection of everyday
                essentials, modern finds, and products worth discovering.
              </p>

              <a
                href="#collection"
                className="mt-9 inline-flex items-center gap-4 bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Discover products
                <span>↗</span>
              </a>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-xs text-neutral-400">
                <span>
                  <strong className="text-white">01</strong> — Curated
                  collection
                </span>
                <span>
                  <strong className="text-white">02</strong> — Modern
                  essentials
                </span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden min-h-[320px] items-center justify-center md:flex">
              <div className="absolute h-64 w-64 rounded-full border border-white/10 lg:h-80 lg:w-80" />
              <div className="absolute h-48 w-48 rounded-full border border-white/10 lg:h-64 lg:w-64" />

              <div className="relative flex h-56 w-56 rotate-[-6deg] flex-col justify-between border border-white/15 bg-[#1b1b1b] p-6 shadow-2xl transition duration-500 hover:rotate-0 lg:h-72 lg:w-72 lg:p-8">
                <span className="text-xs font-semibold tracking-[0.25em] text-neutral-400">
                  MONO / EDITION 01
                </span>

                <div>
                  <div className="mb-3 h-px w-12 bg-white" />
                  <p className="text-3xl font-medium leading-tight tracking-[-0.05em] text-white lg:text-4xl">
                    Objects
                    <br />
                    of interest.
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-neutral-500">
                    Everyday, refined.
                  </span>
                  <span className="text-xl text-white">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Heading */}
      <section
        id="collection"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 lg:px-8 lg:pb-24"
      >
        <div className="mb-8 flex flex-col justify-between gap-5 border-b border-neutral-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Selected for you / 2026
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.045em] sm:text-4xl">
              The collection
            </h2>

            <p className="mt-3 text-sm text-neutral-500">
              Good products. No unnecessary complications.
            </p>
          </div>

          <p className="text-xs font-medium text-neutral-500">
            {products.length} PRODUCTS
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group block"
              >
                <div className="relative flex h-[260px] items-center justify-center overflow-hidden rounded-xl bg-[#f0f0ee] p-7 sm:h-[290px]">
                  {product.thumbnail ? (
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      loading={index < 4 ? "eager" : "lazy"}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-xs text-neutral-400">
                      Image unavailable
                    </span>
                  )}

                  {product.discountPercentage > 0 && (
                    <span className="absolute left-3 top-3 bg-white px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-black">
                      -{Math.round(product.discountPercentage)}%
                    </span>
                  )}

                  <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-lg opacity-0 shadow-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </span>
                </div>

                <div className="px-0.5 pt-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="truncate text-[10px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                      {product.brand || product.category.replaceAll("-", " ")}
                    </span>

                    <span className="shrink-0 text-xs text-neutral-500">
                      ★ {product.rating.toFixed(1)}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 min-h-[44px] text-sm font-medium leading-6 text-[#171717] transition group-hover:text-neutral-500">
                    {product.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between border-t border-neutral-200 pt-3">
                    <span className="text-base font-semibold tracking-tight">
                      ${product.price.toFixed(2)}
                    </span>

                    <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                      View details ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-20 text-center text-sm text-neutral-500">
            No products available at the moment.
          </p>
        )}

        <div className="mt-14 flex justify-center">
          <a
            href="https://dummyjson.com/products"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-neutral-300 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider transition hover:border-black hover:bg-black hover:text-white"
          >
            Explore product catalogue ↗
          </a>
        </div>
      </section>

      {/* About / Brand Section */}
      <section
        id="about"
        className="border-y border-neutral-200 bg-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-2 md:items-center lg:px-8 lg:py-20">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              The philosophy
            </p>

            <h2 className="max-w-lg text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
              Shopping should feel simple.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            MONO brings product discovery into a clean, considered space.
            Browse the collection, explore the details, and find what works
            for you — without the clutter.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Link
                href="/"
                className="text-2xl font-black tracking-[-0.08em]"
              >
                MONO<span className="text-neutral-500">.</span>
              </Link>

              <p className="mt-3 text-xs text-neutral-500">
                A simpler way to discover products.
              </p>
            </div>

            <a
              href="#collection"
              className="text-xs text-neutral-300 transition hover:text-white"
            >
              Browse collection ↑
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[10px] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} MONO Store.</p>
            <p>Designed with simplicity in mind.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
