type ApparelItem = {
  name: string;
  availability: string;
  shipmentInfo: string;
  price: string;
  size: string;
  images: string;
};

type MusicItem = Omit<ApparelItem, "size">;
