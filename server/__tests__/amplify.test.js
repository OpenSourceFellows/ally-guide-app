const app = require("../index");
const request = require("supertest");
require("dotenv").config();

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/:zipCode", () => {
  const zipCode = "92107"
  const route = "/" + zipCode;
  test("returns a 401 if Bearer token isn't provided", async () => {
    const call = await request(app)
      .get(route)
      .set("Authorization", "Bearer " + "incorrect-token");
    expect(incorrectCall.status).toBe(401);
  });
