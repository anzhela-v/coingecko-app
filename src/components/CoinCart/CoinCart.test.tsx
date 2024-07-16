import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CoinCart from ".";

const mockItem = {
  id: "ethereum",
  symbol: "eth",
  name: "Ethereum",
  image:
    "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
  current_price: 3176.89,
  high_24h: 3213.09,
  low_24h: 3079.72,
};

describe("CoinCart", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render properly", () => {
    const result = render(<CoinCart item={mockItem} />);

    expect(result.getByText(mockItem.name)).toBeInTheDocument();
    expect(result.getByText(`(${mockItem.symbol})`)).toBeInTheDocument();
    expect(result.getByText(mockItem.current_price)).toBeInTheDocument();
    expect(result.getByText(mockItem.high_24h)).toBeInTheDocument();
    expect(result.getByText(mockItem.low_24h)).toBeInTheDocument();
  });
});
