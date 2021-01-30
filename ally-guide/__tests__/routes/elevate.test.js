const app = require("../app");
const request = require("supertest");
require("dotenv").config();

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/:zipCode", () => {
  const route = "/assets";
  test("returns a 401 if Bearer token isn't provided", async () => {
    const incorrectCall = await request(app)
      .get(route)
      .set("Authorization", "Bearer " + "incorrect-token");
    expect(incorrectCall.status).toBe(401);
  });
