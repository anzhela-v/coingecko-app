import { render } from "@testing-library/react";
import { QueryClientWrapper } from "@/hooks/utils";
import { useCoinsData } from "@/hooks/useCoinsData";
import "@testing-library/jest-dom";
import CoinsMarkets from "./markets";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("../../hooks/useCoinsData", () => ({
  ...jest.requireActual("../../hooks/useCoinsData"),
  useCoinsData: jest.fn().mockImplementation(() => ({
    data: [
      { id: 1, name: "Bitcoin", symbol: "BTC", price: 50000 },
      { id: 2, name: "Ethereum", symbol: "ETH", price: 3000 },
    ],
    isLoading: false,
    error: null,
  })),
}));

jest.mock("antd/lib", () => ({
  ...jest.requireActual("antd/lib"),
  Spin: () => <p>Mock spinner</p>,
  Col: () => <div></div>,
}));

describe("CoinsMarkets component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders loading spinner when data is loading", () => {
    (useCoinsData as jest.Mock).mockImplementation(() => ({
      isLoading: true,
      error: null,
      data: [],
    }));

    const result = render(<CoinsMarkets />, { wrapper: QueryClientWrapper });
    const loadingSpinner = result.getByText("Mock spinner");
    expect(loadingSpinner).toBeInTheDocument();
  });

  it("renders error message when there is an error fetching data", () => {
    (useCoinsData as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      error: "Error fetching coins",
      data: [],
    }));
    const result = render(<CoinsMarkets />, { wrapper: QueryClientWrapper });
    const errorMessage = result.getByText("Error fetching coins");
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders list of coins when data is fetched successfully", () => {
    (useCoinsData as jest.Mock).mockImplementation(() => ({
      isLoading: false,
      error: null,
      data: [
        { id: 1, name: "Bitcoin", symbol: "BTC", price: 50000 },
        { id: 2, name: "Ethereum", symbol: "ETH", price: 3000 },
      ],
    }));

    const result = render(<CoinsMarkets />, { wrapper: QueryClientWrapper });

    const title = result.getByText("Coins Markets");
    expect(title).toBeInTheDocument();
  });
});
