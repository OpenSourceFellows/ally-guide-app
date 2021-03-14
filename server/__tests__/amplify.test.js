const app = require("../index");
const request = require("supertest");
require("dotenv").config();
afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/api/amplify/:zipCode", () => {
  const zipCode = "92107"
  const route = "/api/amplify/" + zipCode;
  test("Returns congress members object ", async () => {
    const response = await request(app)
      .get(route)
    console.log(response.body)
  });
})
