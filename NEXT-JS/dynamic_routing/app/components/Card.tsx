
import React from "react";

interface CardProps {
  data: {
    title: string;
    price: number;
    thumbnail?: string;
    category?: string;
    rating?: number;
    brand?: string;
  };
}

const Card = ({ data }: CardProps) => {
  return (
    <article className="group w-full overflow-hidden rounded-xl border border-[#eaeaea] bg-white transition-all duration-300 hover:border-[#c9c9c9]">
      {/* Product Image */}
      <div className="relative flex h-[250px] items-center justify-center overflow-hidden bg-[#f6f6f4] p-6">
        {data.thumbnail ? (
          <img
            src={data.thumbnail}
            alt={data.title}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">
            Product image
          </div>
        )}

        <span className="absolute left-3 top-3 rounded bg-white px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-600">
          New arrival
        </span>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="truncate text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-500">
            {data.brand || data.category?.replaceAll("-", " ") || "Collection"}
          </span>

          {data.rating !== undefined && (
            <span className="shrink-0 text-xs text-neutral-600">
              ★ {data.rating.toFixed(1)}
            </span>
          )}
        </div>

        <h3 className="min-h-[44px] text-[15px] font-medium leading-[1.6] tracking-[-0.02em] text-[#171717]">
          {data.title}
        </h3>

        <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[0.12em] text-neutral-400">
              Price
            </p>
            <p className="text-lg font-semibold tracking-tight text-[#171717]">
              ${data.price.toFixed(2)}
            </p>
          </div>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-lg text-neutral-700 transition-colors duration-200 group-hover:border-black group-hover:bg-black group-hover:text-white">
            ↗
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
