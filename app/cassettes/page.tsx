import { ProductList } from "@/components/common/productList";
import { fetchProductsData } from "@/utils/requests";

const Cassettes = async () => {
  const cassettesData = await fetchProductsData("cassettes");

  return <ProductList items={cassettesData} heading="No Solace Cassettes collection" />;
};

export default Cassettes;
