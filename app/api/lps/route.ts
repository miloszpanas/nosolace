import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import LongPlays from "@/models/lps";

export const GET = async (request: NextApiRequest) => {
  try {
    await mongoDb();
    const longPlays = await LongPlays.find({}).exec();
    return new Response(JSON.stringify(longPlays), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
