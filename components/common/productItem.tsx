"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { ProductItem } from "@/types/products";
import ProductItemPlaceholder from "@/assets/images/cd_placeholder.png";

export const ProductItem = ({ product }: ProductItem) => {
  const { name, availability, price, shipmentInfo, _id } = product;
  const pathname = usePathname();
  const pathNameBit = pathname !== "/" ? pathname : "/recommended";

  return (
    <article className="grid gap-4 relative group">
      <Link className="absolute inset-0 z-10" href={`${pathNameBit}/${_id}`}>
        <span className="sr-only">View</span>
      </Link>
      <figure>
        <Image
          alt={name}
          className="rounded-lg object-cover w-full aspect-[1/1] border border-gray-200 dark:border-gray-800"
          height={600}
          width={600}
          src={ProductItemPlaceholder}
        />
        <figcaption className="sr-only">{name}</figcaption>
      </figure>
      <div className="grid gap-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm leading-none">{`Ships in ${shipmentInfo}`}</p>
      </div>
      <div className="flex items-center gap-4">
        <h4 className="font-semibold">{`$${price}`}</h4>
        <Badge variant="outline">{availability}</Badge>
      </div>
    </article>
  );
};
