const app = require("../app");
const request = require("supertest");
require("dotenv").config();

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
});

describe("/lob/:address", () => {
  const route = "/lob/:address";
  const testVerificationObject = {
  "id": "us_ver_po_box",
  "recipient": "TEST KEYS DO NOT VERIFY ADDRESSES",
  "primary_line": "PO BOX 720114",
  "secondary_line": "",
  "urbanization": "",
  "last_line": "SAN FRANCISCO CA 94172-0114",
  "deliverability": "deliverable",
  "components": {
    "primary_number": "720114",
    "street_predirection": "",
    "street_name": "PO BOX",
    "street_suffix": "",
    "street_postdirection": "",
    "secondary_designator": "",
    "secondary_number": "",
    "pmb_designator": "",
    "pmb_number": "",
    "extra_secondary_designator": "",
    "extra_secondary_number": "",
    "city": "SAN FRANCISCO",
    "state": "CA",
    "zip_code": "94172",
    "zip_code_plus_4": "0114",
    "zip_code_type": "po_box",
    "delivery_point_barcode": "941720114146",
    "address_type": "residential",
    "record_type": "po_box",
    "default_building_address": false,
    "county": "SAN FRANCISCO",
    "county_fips": "06075",
    "carrier_route": "B002",
    "carrier_route_type": "po_box",
    "latitude": 37.75971500260575,
    "longitude": -122.69397561170017
  },
  "deliverability_analysis": {
    "dpv_confirmation": "Y",
    "dpv_cmra": "N",
    "dpv_vacant": "N",
    "dpv_active": "Y",
    "dpv_footnotes": [
      "AA",
      "BB"
    ],
    "ews_match": false,
    "lacs_indicator": "",
    "lacs_return_code": "",
    "suite_return_code": ""
    },
  "object": "us_verification"
  } 

 
  test("Returns verification object", async () => {
    const verificationObject= await request(app)
      .get(route)
    expect(verificationObject).toBe(testVerificationObject);
  });


  test("Matches html templates", async () => {
    const htmlTemplate = await request(app)
      .get(route)
    expect(verificationObject).toBe(testVerificationObject);
  });

describe("/lob/:address", () => {
  const route = "/lob/:address";
  const testHTMLTemplate= {
    
  } 
}
})
