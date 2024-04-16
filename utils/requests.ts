export const fetchProductsData = async (productType: string): Promise<ApparelItem[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/${productType}`);
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchSingleProductsData = async ({
  productType,
  productId
}: {
  productType: string;
  productId: number;
}): Promise<ApparelItem | MusicItem> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/${productType}/${productId}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
