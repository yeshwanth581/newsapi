const supertest = require("supertest");
// app is supposed to point to the app.js file
const app = require("../app");

describe("Test both news APIs", () => {
  describe("Testing GET news/getTopNews?country=gb endpoint", () => {
    it("respond with valid HTTP status code and description and message", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getTopNews?country=gb")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(200);
          expect(response.body.news.status).toBe("ok");
          expect(response.body.news.totalResults).toBeGreaterThan(0);
          done();
        });
    });

    it("respond with valid HTTP status code and description and message for passing page param", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getTopNews?country=gb&page=2")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(200);
          expect(response.body.news.status).toBe("ok");
          expect(response.body.news.totalResults).toBeGreaterThan(0);
          done();
        });
    });

    it("respond with error HTTP status code and description and message for invalid query params", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getTopNews?countrys=gb")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(400);
          expect(response.body).toHaveProperty("message");
          expect(response.body).toHaveProperty("description");
          done();
        });
    });

    it("respond with error HTTP status code and description and message for not passing query params", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getTopNews")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(400);
          expect(response.body).toHaveProperty("message");
          expect(response.body).toHaveProperty("description");
          done();
        });
    });
  });

  describe("Testing GET news/getFilteredNews?search=... endpoint", () => {
    it("respond with valid HTTP status code and description and message", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getFilteredNews?search=microsoft")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(200);
          expect(response.body.news.status).toBe("ok");
          expect(response.body.news.totalResults).toBeGreaterThan(0);
          done();
        });
    });

    it("respond with valid HTTP status code and description and message for passing page param", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getFilteredNews?search=microsoft&page=2")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(200);
          expect(response.body.news.status).toBe("ok");
          expect(response.body.news.totalResults).toBeGreaterThan(0);
          done();
        });
    });

    it("respond with error HTTP status code and description and message for invalid query params", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getFilteredNews?searchs=microsoft")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(400);
          expect(response.body).toHaveProperty("message");
          expect(response.body).toHaveProperty("description");
          done();
        });
    });

    it("respond with error HTTP status code and description and message for not passing query params", (done) => {
      // Making GET Request
      supertest(app)
        .get("/news/getFilteredNews")
        .then((response) => {
          // Compare response with expectations
          expect(response.status).toBe(400);
          expect(response.body).toHaveProperty("message");
          expect(response.body).toHaveProperty("description");
          done();
        });
    });
  });
});
