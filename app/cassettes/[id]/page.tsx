"use client";
import { useParams, usePathname } from "next/navigation";
import { SingleProduct } from "@/components/common/singleProduct";

const extractedPathnameRegex = /\/([^\/]+)\/([^\/]+)$/;

const CassetteProduct = () => {
  const { id } = useParams();
  const pathName = usePathname();

  const res = pathName.match(extractedPathnameRegex);
  const productType = res[1];

  return <SingleProduct productType={productType} productId={id as number} />;
};

export default CassetteProduct;
