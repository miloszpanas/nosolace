import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import Apparel from "@/models/apparel";

export const GET = async (request: NextApiRequest) => {
  try {
    await mongoDb();
    const apparel = await Apparel.find({}).exec();
    return new Response(JSON.stringify(apparel), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
