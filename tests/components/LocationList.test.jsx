import { render, waitFor, screen, fireEvent } from "../test-utils.jsx";
import LocationList from "../../src/components/LocationList/LocationList.jsx";
import { describe, expect, it } from "vitest";
import { server } from "../../src/mocks/server.js";
import { http, HttpResponse } from "msw";

describe("Test LocationList componenet", () => {
  it("should Test hedding with SliderDataHome in LocationList componenet #1", async () => {
    render(<LocationList />);

    await waitFor(() => {
      const textSliderHeader = screen.getByText(
        /beautiful places around the world/i
      );
      expect(textSliderHeader).toBeInTheDocument;
      const sliderDataHomeDivs = screen.getAllByTestId("SliderDataHome");
      expect(sliderDataHomeDivs.length).toBeGreaterThan(0);
    });
  });
  it("should Test correctly display 4 hotel cards in the SliderDataHome component in LocationList componenet #2", async () => {
    render(<LocationList />);
    await waitFor(() => {
      const users = screen.getAllByTestId("SliderDataHome");
      expect(users).toHaveLength(4);
    });
  });
  it("should Test render error message SliderDataHome component in LocationList componenet #3", async () => {
    server.use(
      http.get("http://localhost:5000/hotels", () => {
        return HttpResponse.json(null, { status: 404 });
      })
    );
    render(<LocationList />);
    console.log("Error");
  });
  it("should Test button Left and Button in the SliderDataHome component in LocationList componenet #4", async () => {
    render(<LocationList />);
    await waitFor(() => {
      const buttonLeft = screen.getByLabelText("Left");
      expect(buttonLeft).toBeInTheDocument();
      fireEvent.click(buttonLeft);
      const buttonRight = screen.getByLabelText("Right");
      expect(buttonRight).toBeInTheDocument();
      fireEvent.click(buttonRight);
    });
  });
  it("should Test Test correctly display 4 hotel cards in the LocationDataHome component in LocationList componenet #5", async () => {
    render(<LocationList />);
    await waitFor(() => {
      const users = screen.getAllByTestId("LocationDataHome");
      expect(users).toHaveLength(4);
    });
  });
  it("should Test render error message LocationDataHome component in LocationList componenet #6", async () => {
    server.use(
      http.get("http://localhost:5000/hotels", () => {
        return HttpResponse.json(null, { status: 404 });
      })
    );
    render(<LocationList />);
    console.log("Error");
  });
});
