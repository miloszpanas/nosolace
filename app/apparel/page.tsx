import { ProductList } from "@/components/common/productList";
import { fetchProductsData } from "@/utils/requests";

const Apparel = async () => {
  const apparel = await fetchProductsData("apparel");

  return <ProductList items={apparel} heading="No Solace Black Metal Apparel" />;
};

export default Apparel;
