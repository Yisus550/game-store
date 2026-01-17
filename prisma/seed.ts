import { users } from "./data/users";
import { games } from "./data/games";
import { platforms } from "./data/platforms";
import { genres } from "./data/genres";
import { gameKeys } from "./data/gamekeys";
import { orders } from "./data/orders";
import { orderItems } from "./data/orderItems";
import { reviews } from "./data/reviews";
import { PrismaClient } from "@/src/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.createMany({
      data: users,
    });
  } catch (error) {
    console.log(error);
  }
}
