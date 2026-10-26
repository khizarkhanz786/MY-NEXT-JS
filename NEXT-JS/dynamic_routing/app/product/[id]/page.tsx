
import React from "react";
import axios from "axios";
import Link from "next/link";
import {
  ShoppingCart,
  ArrowLeft,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Check,
  Package,
} from "lucide-react";

type ProductPageProp = {
  params: Promise<{
    id: string;
  }>;
};

const ProductDetailPage = async ({ params }: ProductPageProp) => {
  const { id } = await params;

  const response = await axios.get(
    `https://dummyjson.com/products/${id}`
  );

  const product = response.data;

  const originalPrice = product.price / (1 - product.discountPercentage / 100);

  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Announcement Bar */}
      <div className="bg-[#171717] px-4 py-2.5 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-white sm:text-xs">
        Exceptional quality. Considered design. Everyday essentials.
      </div>

      {/* Navigation */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-black tracking-[-0.08em]"
          >
            MONO<span className="text-neutral-400">.</span>
          </Link>

          <Link
            href="/#collection"
            className="flex items-center gap-2 text-xs font-medium text-neutral-600 transition hover:text-black sm:text-sm"
          >
            <ArrowLeft size={16} strokeWidth={1.7} />
            Back to collection
          </Link>

          <div
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200"
          >
            <ShoppingCart size={18} strokeWidth={1.7} />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <p className="text-xs text-neutral-400">
          Home <span className="mx-2">/</span>
          Collection <span className="mx-2">/</span>
          <span className="capitalize text-neutral-800">
            {product.category?.replaceAll("-", " ")}
          </span>
        </p>
      </div>

      {/* Product Detail */}
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">

          {/* Product Gallery */}
          <div>
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#f6f6f4] p-8 sm:min-h-[500px] sm:p-12">
              {product.images?.[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="max-h-[430px] w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <div className="text-sm text-neutral-400">
                  Product image unavailable
                </div>
              )}

              {product.discountPercentage > 0 && (
                <span className="absolute left-5 top-5 bg-black px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                  Save {Math.round(product.discountPercentage)}%
                </span>
              )}

              <span className="absolute bottom-5 right-5 rounded-full border border-neutral-200 bg-white/90 px-3 py-2 text-[10px] uppercase tracking-widest text-neutral-600">
                Product No. {product.id}
              </span>
            </div>

            {/* Gallery Thumbnails */}
            {product.images?.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.slice(0, 4).map(
                  (image: string, index: number) => (
                    <div
                      key={`${image}-${index}`}
                      className="flex h-20 items-center justify-center overflow-hidden rounded-lg border border-neutral-200 bg-[#f6f6f4] p-2 sm:h-24"
                    >
                      <img
                        src={image}
                        alt={`${product.title} view ${index + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )
                )}
              </div>
            )}

            {/* Trust Details */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-neutral-200 border-y border-neutral-200 py-5">
              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <Truck size={20} strokeWidth={1.5} />
                <span className="text-[10px] leading-4 text-neutral-600 sm:text-xs">
                  Reliable shipping
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <RotateCcw size={20} strokeWidth={1.5} />
                <span className="text-[10px] leading-4 text-neutral-600 sm:text-xs">
                  Easy returns
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 px-2 text-center">
                <ShieldCheck size={20} strokeWidth={1.5} />
                <span className="text-[10px] leading-4 text-neutral-600 sm:text-xs">
                  Secure shopping
                </span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col pt-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {product.brand || product.category?.replaceAll("-", " ")}
              </span>

              <div className="flex items-center gap-1.5">
                <Star
                  size={15}
                  fill="#171717"
                  strokeWidth={1.5}
                />
                <span className="text-sm font-semibold">
                  {product.rating}
                </span>
                <span className="text-xs text-neutral-400">
                  / 5
                </span>
              </div>
            </div>

            <h1 className="mt-5 text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              {product.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-7 border-b border-neutral-200 pb-7">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-3xl font-semibold tracking-tight">
                  ${product.price.toFixed(2)}
                </span>

                {product.discountPercentage > 0 && (
                  <span className="text-base text-neutral-400 line-through">
                    ${originalPrice.toFixed(2)}
                  </span>
                )}

                {product.discountPercentage > 0 && (
                  <span className="text-xs font-semibold text-emerald-700">
                    {product.discountPercentage.toFixed(1)}% OFF
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs text-neutral-400">
                Final price and availability are subject to change.
              </p>
            </div>

            {/* Availability */}
            <div className="mt-6 flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-4">
              <div className="flex items-center gap-3">
                <span
                  className={`h-2 w-2 rounded-full ${
                    product.stock > 0 ? "bg-emerald-500" : "bg-red-500"
                  }`}
                />

                <div>
                  <p className="text-sm font-medium">
                    {product.stock > 0 ? "In stock" : "Out of stock"}
                  </p>
                  <p className="mt-1 text-xs text-neutral-500">
                    {product.stock > 0
                      ? `${product.stock} units available`
                      : "Currently unavailable"}
                  </p>
                </div>
              </div>

              <Package size={20} className="text-neutral-400" />
            </div>

            {/* Cart Button */}
            <button
              type="button"
              disabled={product.stock <= 0}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-lg bg-[#171717] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-neutral-700 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              <ShoppingCart size={19} strokeWidth={1.7} />
              {product.stock > 0 ? "Add to cart" : "Out of stock"}
            </button>

            <p className="mt-3 text-center text-[11px] text-neutral-400">
              Carefully selected products for everyday living.
            </p>

            {/* Product Specifications */}
            <div className="mt-9">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em]">
                Product details
              </h2>

              <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                <div className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-neutral-500">Category</span>
                  <span className="text-right capitalize">
                    {product.category?.replaceAll("-", " ") || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-neutral-500">Brand</span>
                  <span className="text-right">
                    {product.brand || "Not specified"}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-neutral-500">SKU</span>
                  <span className="text-right">{product.sku || "—"}</span>
                </div>

                <div className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-neutral-500">Minimum order</span>
                  <span className="text-right">
                    {product.minimumOrderQuantity ?? 1} unit(s)
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping & Returns */}
            <div className="mt-7 space-y-4">
              <div className="flex gap-3">
                <Truck
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-neutral-500"
                />
                <div>
                  <h3 className="text-sm font-medium">
                    Shipping information
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {product.shippingInformation || "Shipping details unavailable."}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <RotateCcw
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-neutral-500"
                />
                <div>
                  <h3 className="text-sm font-medium">Return policy</h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {product.returnPolicy || "Return policy unavailable."}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-neutral-500"
                />
                <div>
                  <h3 className="text-sm font-medium">Warranty</h3>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {product.warrantyInformation || "Warranty details unavailable."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Link href="/" className="text-lg font-black tracking-[-0.08em]">
            MONO<span className="text-neutral-400">.</span>
          </Link>

          <p className="text-xs text-neutral-400">
            Thoughtful products. Timeless simplicity.
          </p>

          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} MONO
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ProductDetailPage;
