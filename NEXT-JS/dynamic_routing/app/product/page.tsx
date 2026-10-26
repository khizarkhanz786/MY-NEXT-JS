
import React from "react";
import axios from "axios";
import Link from "next/link";
import Card from "../components/Card";


interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
  brand?: string;
}

const Page = async () => {
  const response = await axios.get(
    "https://dummyjson.com/products"
  );

  const products: Product[] = response.data.products;

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-slate-900">
      {/* Announcement Bar */}
      <div className="bg-slate-950 px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm">
        PREMIUM FINDS. BETTER PRICES.
        <span className="ml-2 text-amber-400">
          Discover the collection →
        </span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-slate-950"
          >
            MONO<span className="text-amber-500">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-amber-600">
              Home
            </Link>
            <a href="#products" className="transition hover:text-amber-600">
              Collection
            </a>
            <a href="#about" className="transition hover:text-amber-600">
              About
            </a>
          </nav>

          <a
            href="#products"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500 hover:text-slate-950"
          >
            Explore Store
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:pb-16 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#101827] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Decorative shapes */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-6 -top-10 h-60 w-60 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-32 right-20 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              The curated collection
            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Find your next
              <span className="block text-amber-400">
                favourite thing.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
              Discover standout products, explore the latest essentials,
              and find quality picks worth adding to your collection.
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-amber-300"
            >
              Shop the collection
              <span aria-hidden="true">↗</span>
            </a>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
              <span>
                <strong className="text-white">10</strong> curated picks
              </span>
              <span>
                <strong className="text-white">100%</strong> online
              </span>
              <span>Made for modern living</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products"
        className="mx-auto max-w-7xl scroll-mt-8 px-5 pb-20 lg:px-8"
      >
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">
              Handpicked for you
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Explore products
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Thoughtfully selected products for your everyday needs.
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm sm:justify-start">
            <span className="text-slate-500">Showing</span>
            <span className="font-bold text-slate-950">
              {products.length} products
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((prod, index) => (
              <Link
                key={prod.id}
                href={`/product/${prod.id}`}
                className="group block min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3 transition duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.09)]"
              >
                <div className="mb-3 flex items-center justify-between px-1 pt-1">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-600">
                    {prod.category?.replaceAll("-", " ") || "Collection"}
                  </span>

                  <span className="text-xs font-semibold text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Existing Card component */}
                <div className="overflow-hidden rounded-xl [&_img]:transition-transform [&_img]:duration-500 group-hover:[&_img]:scale-[1.04]">
                  <Card data={prod} />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 px-1 pt-4">
                  <div className="min-w-0">
                    <p className="truncate text-xs text-slate-500">
                      {prod.brand || "Selected collection"}
                    </p>
                    <p className="mt-1 text-lg font-bold tracking-tight text-slate-950">
                      ${prod.price.toFixed(2)}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-lg text-white transition duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white py-20 text-center">
            <h3 className="text-xl font-semibold">No products found</h3>
            <p className="mt-2 text-sm text-slate-500">
              Please check back later for new arrivals.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-slate-800 bg-[#101827] text-white"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight">
            MONO<span className="text-amber-400">.</span>
          </Link>

          <p className="text-sm text-slate-400">
            A considered collection. A better shopping experience.
          </p>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MONO. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Page;
