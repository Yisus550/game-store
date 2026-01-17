export const reviews = [
  // --- User 1 Reviews (Bought: Zelda, GoW, Cyberpunk, Witcher) ---
  {
    userId: 1,
    gameId: 1, // Zelda: Breath of the Wild
    rating: 5,
    comment:
      "An absolute masterpiece. The open world is breathtaking and the physics engine is a playground.",
    createdAt: new Date("2023-10-05T18:00:00Z"), // Reviewed 4 days after purchase
  },
  {
    userId: 1,
    gameId: 3, // Cyberpunk 2077
    rating: 4,
    comment:
      "Visually stunning night City. The story is gripping, though I still encountered a few minor bugs.",
    createdAt: new Date("2023-10-15T09:30:00Z"),
  },
  {
    userId: 1,
    gameId: 7, // Witcher 3 (Bought later in Order #4)
    rating: 5,
    comment:
      "The gold standard for RPGs. Geralt's story is something I will never forget.",
    createdAt: new Date("2023-10-20T14:20:00Z"),
  },

  // --- User 2 Reviews (Bought: Minecraft, Among Us) ---
  {
    userId: 2,
    gameId: 5, // Among Us
    rating: 5,
    comment:
      "Best played with a group of friends on Discord. Simple but hilarious.",
    createdAt: new Date("2023-10-06T20:00:00Z"), // Reviewed 1 day after purchase
  },
  // User 2 didn't review Minecraft (simulating that not everyone reviews every game)

  // --- User 3 Reviews (Bought: Hades) ---
  {
    userId: 3,
    gameId: 6, // Hades
    rating: 5,
    comment:
      "Incredible art style, voice acting, and combat loop. Just one more run...",
    createdAt: new Date("2023-10-10T22:15:00Z"),
  },

  // --- User 4 Reviews (Bought: Witcher 3) ---
  {
    userId: 4,
    gameId: 7, // Witcher 3
    rating: 5,
    comment:
      "Finally got around to playing this classic. It holds up perfectly in 2023.",
    createdAt: new Date("2023-10-25T11:00:00Z"),
  },
];
