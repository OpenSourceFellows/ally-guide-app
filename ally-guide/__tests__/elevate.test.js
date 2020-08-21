import {CreateRepList} from "../src/views/Elevate.vue"

test("fetches results from google civic api", () => {
return CreateRepList().then(response => {
    expect(response).toEqual();
  });
});
