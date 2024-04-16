import { ProductList } from "@/components/common/productList";
import { fetchProductsData } from "@/utils/requests";

const LongPlays = async () => {
  const longPlaysData = await fetchProductsData("lps");

  return (
    <ProductList
      items={longPlaysData}
      heading="No Solace Long Plays collection"
      productType="lps"
    />
  );
};

export default LongPlays;
