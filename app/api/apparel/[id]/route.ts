import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import Apparel from "@/models/apparel";

export const GET = async (request: NextApiRequest, { params }) => {
  try {
    await mongoDb();
    const singleItem = await Apparel.findById(params.id);

    if (!singleItem) return new Response("Item does not exist");

    return new Response(JSON.stringify(singleItem), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
