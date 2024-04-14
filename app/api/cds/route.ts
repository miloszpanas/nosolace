import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import Cds from "@/models/cds";

export const GET = async (request: NextApiRequest) => {
  try {
    await mongoDb();
    const cds = await Cds.find({}).exec();
    return new Response(JSON.stringify(cds), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
