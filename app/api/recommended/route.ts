import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import Recommended from "@/models/recommended";

export const GET = async (request: NextApiRequest) => {
  try {
    await mongoDb();
    const recommendedItems = await Recommended.find({}).exec();
    return new Response(JSON.stringify(recommendedItems), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
