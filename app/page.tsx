import { ProductList } from "@/components/common/productList";

const fetchFeaturedItems = async (): Promise<MusicItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/recommended`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const featuredItems = await fetchFeaturedItems();

  return <ProductList items={featuredItems} heading="No Solace Featured Items" />;
}
