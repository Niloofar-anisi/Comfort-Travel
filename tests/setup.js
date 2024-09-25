import { afterEach, beforeAll, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "../src/mocks/server";

afterEach(() => {
  cleanup();
});

// Establish API mocking before all tests.
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Reset any request handlers that are declared during the tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
