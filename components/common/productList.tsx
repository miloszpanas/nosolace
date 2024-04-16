import { ProductItem } from "@/components/common/productItem";
import { Products } from "@/types/products";

export const ProductList = ({ items, heading }: { items: Products; heading: string }) => {
  return (
    <section>
      <div className="grid gap-6 md:gap-8 w-full max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
            <p className="text-gray-500 dark:text-gray-400">Limited edition collection.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {items.map((product) => {
            return <ProductItem product={product} key={product._id} />;
          })}
        </div>
      </div>
    </section>
  );
};
