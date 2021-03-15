require("dotenv").config();
const app = require("../index");
const request = require("supertest");
jest.mock('axios');
const axios = require('axios');
afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/api/amplify/:zipCode", () => {
 test("Returns congress members object ", async () => {
  const mockZipcodeData = [ 
  {
        name: 'Test Congress Person',
        title: 'tester',
        city: 'Test city',
        state: 'CA',
        email: 'Has Not Been Made Public',
        twitter: '',
        facebook: '0000000000000000',
        contactPage: '',
        photoUrl: 'https://cdn.pixabay.com/photo/2000/01/01/01/11/avatar-0000000_0000.png'
      },
      {
        name: 'Test Person 2',
        title: 'Sheriff of Testing',
        city: 'Testville',
        state: 'WA',
        email: 'test@test.com',
        twitter: 'testsheriff',
        facebook: 'testsheriff',
        contactPage: '',
        photoUrl: 'https://cdn.pixabay.com/photo/2000/01/08/09/11/avatar-1111111_1111.png'
  }]

  const zipCode = "92107"
  const route = "/api/amplify/" + zipCode;
  axios.get().mockResolvedValue(mockZipcodeData) 
  const response = await request(app)
    .get(route)
  console.log(response.body)
  });
})
