import Home from "../../src/pages/Home.jsx";
import { fireEvent, render, screen } from "../test-utils.jsx";
import { it, describe, expect, vi } from "vitest";

describe("Test Header Component", () => {
  it("should render Navbar Links #1", () => {
    render(<Home />);
    const LinkHome = screen.getByText(/home/i);
    expect(LinkHome).toBeInTheDocument();
    fireEvent.click(LinkHome);
    const LinkAbout = screen.getByText(/about us/i);
    expect(LinkAbout).toBeInTheDocument();
    fireEvent.click(LinkAbout);
    const LinkContact = screen.getByText(/contact/i);
    expect(LinkContact).toBeInTheDocument();
    fireEvent.click(LinkContact);
  });

  it("should render the login buttom Header #2", () => {
    render(<Home />);
    const buttonLogin = screen.getByRole("button", { name: /login/i });
    expect(buttonLogin).toBeInTheDocument();
    fireEvent.click(buttonLogin);
  });

  it("should render the sign up buttom Header #3", () => {
    render(<Home />);
    const buttonSignUp = screen.getByRole("button", { name: /Sign/i });
    expect(buttonSignUp).toBeInTheDocument();
    fireEvent.click(buttonSignUp);
  });

  it("should render the text Heading #4", () => {
    render(<Home />);
    const textHeading = screen.getByText(/Your Journey Begins Here/i);
    expect(textHeading).toBeInTheDocument();
  });

  it("should render input element Search #5", () => {
    render(<Home />);
    const inputEl = screen.getByPlaceholderText(/where to go?/i);
    expect(inputEl).toBeInTheDocument();
    fireEvent.click(inputEl);
    fireEvent.change(inputEl, { target: { value: "paris" } });
    expect(inputEl.value).toBe("paris");
  });

  it("should render Dropdown calenderDate #6", () => {
    render(<Home />);
    const calenderDate = screen.getByTestId("CalenderDate");
    expect(calenderDate).toBeInTheDocument();
    fireEvent.click(calenderDate);
    const Calendar = screen.getByTestId("Calendar");
    expect(Calendar).toBeInTheDocument();
    fireEvent.click(Calendar);
  });

  it("should render Dropdown And button min,plus #7", () => {
    const handleOptions = vi.fn();
    render(<Home handleOptions={handleOptions} />);
    const optionDropDown = screen.getByTestId("option-dropdown");
    expect(optionDropDown).toBeInTheDocument();
    fireEvent.click(optionDropDown);

    const optionsMenu = screen.getByTestId("options-menu");
    expect(optionsMenu).toBeInTheDocument();
    fireEvent.click(optionsMenu);

    const minusButtons = screen.getAllByTestId("minus-button");
    expect(minusButtons.length).toBeGreaterThan(0);

    const plusButtons = screen.getAllByTestId("plus-button");
    expect(plusButtons.length).toBeGreaterThan(0);
  });

  it("should render button element Search #8", () => {
    render(<Home />);
    const buttonSearch = screen.getByLabelText("Search");
    fireEvent.click(buttonSearch);
  });
});
