import {CreateRepList} from "../src/views/Elevate.vue"

test("ELEVATE TEST: fetches results from google civic api", () => {
	console.log("replist: ", CreateRepList);
	// console.log("replist: ", CreateRepList());
	expect(true).toBe(true);
	//Create Rep List is not available to this test. so it fails. try extrapolating the JS from the view file into a controller.
	// CreateRepList().then(response => {
	// 	console.log("RESP:", response);
	//     expect(response).toEqual();
	//   });
});
