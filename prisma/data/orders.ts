// order data
export const orders = [
  {
    userId: 1,
    status: "COMPLETED",
    total: 169.97,
    createdAt: new Date("2023-10-01T10:00:00Z"),
    items: [
      {
        gameId: 1, // Zelda
        quantity: 1,
        price: 59.99,
      },
      {
        gameId: 2, // God of War
        quantity: 1,
        price: 49.99,
      },
      {
        gameId: 3, // Cyberpunk
        quantity: 1,
        price: 59.99,
      },
    ],
  },

  {
    userId: 2,
    status: "COMPLETED",
    total: 34.98,
    createdAt: new Date("2023-10-05T14:30:00Z"),
    items: [
      {
        gameId: 4, // Minecraft
        quantity: 1,
        price: 29.99,
      },
      {
        gameId: 5, // Among Us
        quantity: 1,
        price: 4.99,
      },
    ],
  },

  {
    userId: 3,
    status: "COMPLETED",
    total: 24.99,
    createdAt: new Date("2023-10-08T09:15:00Z"),
    items: [
      {
        gameId: 6, // Hades
        quantity: 1,
        price: 24.99,
      },
    ],
  },

  {
    userId: 4,
    status: "COMPLETED",
    total: 39.99,
    createdAt: new Date("2023-10-12T11:20:00Z"),
    items: [
      {
        gameId: 7, // Witcher 3
        quantity: 1,
        price: 39.99,
      },
    ],
  },
];
