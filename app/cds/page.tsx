import { ProductList } from "@/components/common/productList";
import { fetchProductsData } from "@/utils/requests";

const Cds = async () => {
  const cdsData = await fetchProductsData("cds");

  return <ProductList items={cdsData} heading="No Solace CDs collection" />;
};

export default Cds;
