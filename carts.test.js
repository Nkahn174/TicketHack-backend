const request = require("supertest");
const app = require("./app");

it("DELETE /carts/trips", async () => {
  const res = await request(app).delete("/carts/trips");
  expect(res.statusCode).toBe(200);
  expect(res.body.result).toEqual(true);
});

it("POST /carts/trips", async () => {
  const res = await request(app).post("/carts/trips").send({
    id: "6863bc277ada770ab45a17f8",
  });

  expect(res.statusCode).toBe(200);
  expect(res.body.ajout.trips).toEqual({
    _id: "6863bc277ada770ab45a17f8",
    departure: "Bruxelles",
    arrival: "Marseille",
    date: "2025-07-01T10:59:07.907Z",
    price: 57,
  });
});


it("GET /carts/trips", async () => {
  const res = await request(app).get("/carts/trips")

  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(true)
});

it("GET /carts/booking/trips", async () => {
  const res = await request(app).get("/carts/booking/trips")

  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(false) // false car pas de booking: true pour le moment
});
