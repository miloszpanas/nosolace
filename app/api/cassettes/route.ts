import { NextApiRequest } from "next";
import { mongoDb } from "@/lib/mongodb";
import Cassette from "@/models/cassettes";

export const GET = async (request: NextApiRequest) => {
  try {
    await mongoDb();
    const cassette = await Cassette.find({}).exec();
    return new Response(JSON.stringify(cassette), { status: 200 });
  } catch {
    return new Response("Something went wrong", {
      status: 500
    });
  }
};
