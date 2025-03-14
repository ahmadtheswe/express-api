import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return Hello, Jest Test!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, Jest Test!");
  });
});
