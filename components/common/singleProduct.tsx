import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import ProductItemPlaceholder from "@/assets/images/cd_placeholder.png";
import { fetchSingleProductsData } from "@/utils/requests";

export const SingleProduct = async ({
  productType,
  productId
}: {
  productType: string;
  productId: number;
}) => {
  const productItem = await fetchSingleProductsData({ productType, productId });
  const { name, availability, shipmentInfo, price } = productItem;

  return (
    <Card className="w-full max-w-lg flex-col">
      <CardContent className="p-6 flex-auto grid gap-6">
        <div className="flex items-start -mx-3">
          <div className="flex">
            <Image
              alt="Album cover"
              className="aspect-square rounded-lg overflow-hidden object-cover"
              height={200}
              src={ProductItemPlaceholder}
              width={200}
            />
          </div>
          <div className="mx-3 grid gap-2 text-sm">
            <div className="flex flex-col gap-1.5 leading-none min-h-24">
              <h1 className="text-2xl font-bold tracking-tighter leading-none">{name}</h1>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-muted">
                Catalog # NOEVDVD049
              </p>
            </div>
            <div className="grid gap-1">
              <p className="text-sm">
                <span className="font-medium">Availability: </span>
                <span className="text-success">{availability}</span>
              </p>
            </div>
            <div className="grid gap-1 text-sm">
              <p className="text-sm">
                <span className="font-medium">Ships: </span>
                Within {shipmentInfo}
              </p>
              <p className="text-2xl font-bold">${price}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <form className="grid gap-2">
            <div className="flex items-center gap-1.5">
              <Label className="text-base" htmlFor="quantity">
                Quantity
              </Label>
              <Input
                className="w-16"
                defaultValue="1"
                id="quantity"
                placeholder="1"
                type="number"
              />
            </div>
            <Button size="lg" className="bg-custom-accent">
              Add to cart
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
