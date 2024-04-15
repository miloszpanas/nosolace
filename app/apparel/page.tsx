import { ProductItem } from "@/components/common";

const fetchProperties = async (): Promise<ApparelItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/apparel`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const Apparel = async () => {
  const apparel = await fetchProperties();

  return (
    <section>
      <div className="grid gap-6 md:gap-8 w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">No Solace Black Metal Apparel</h1>
            <p className="text-gray-500 dark:text-gray-400">Limited edition apparel collection.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {apparel.map((product) => {
            return <ProductItem product={product} key={product._id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Apparel;
