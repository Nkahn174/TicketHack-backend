const request = require("supertest");
const app = require("./app");

it("POST /trips", async () => {
  const res = await request(app).post("/trips").send({
    departure: "Marseille",
    arrival: "lyon",
    date: "2025-07-01T10:50:50.812Z",
  });

  expect(res.statusCode).toBe(200);
  expect(res.body.tripsfound).toEqual([
    {
      _id: "6863bc277ada770ab45a17f7",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T10:50:50.812Z",
      price: 116,
    },
    {
      _id: "6863bc277ada770ab45a17fd",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T12:07:52.181Z",
      price: 86,
    },
    {
      _id: "6863bc277ada770ab45a180d",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T14:17:31.793Z",
      price: 87,
    },
    {
      _id: "6863bc277ada770ab45a1816",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T15:20:40.008Z",
      price: 39,
    },
    {
      _id: "6863bc277ada770ab45a1829",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T19:01:30.878Z",
      price: 104,
    },
    {
      _id: "6863bc277ada770ab45a1839",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T21:39:58.036Z",
      price: 71,
    },
    {
      _id: "6863bc277ada770ab45a183c",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T21:52:02.300Z",
      price: 132,
    },
    {
      _id: "6863bc277ada770ab45a1840",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-01T22:38:17.189Z",
      price: 59,
    },
    {
      _id: "6863bc277ada770ab45a1873",
      departure: "Marseille",
      arrival: "Lyon",
      date: "2025-07-02T08:32:44.362Z",
      price: 30,
    },
  ]);
});
