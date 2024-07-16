import { renderHook, waitFor } from "@testing-library/react";
import { fetchCoins } from "@/services/coins";
import { QueryClientWrapper } from "./utils";
import { useCoinsData } from "./useCoinsData";

jest.mock("../services/coins", () => ({
  ...jest.requireActual("../services/coins"),
  fetchCoins: jest.fn(),
}));

describe("useCoinData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return loading state initially", () => {
    const id = "bitcoin";
    const { result } = renderHook(() => useCoinsData(), {
      wrapper: QueryClientWrapper,
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBe(undefined);
    expect(result.current.error).toBe(null);
  });

  it("should fetch data successfully when id is provided", async () => {
    const id = "bitcoin";
    const mockCoinData = { id: "bitcoin", name: "Bitcoin", price: 35000 };

    (fetchCoins as jest.Mock).mockResolvedValue(mockCoinData);

    const { result } = renderHook(() => useCoinsData(), {
      wrapper: QueryClientWrapper,
    });

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.data).toEqual(mockCoinData);
      expect(result.current.error).toBe(null);
    });
  });
});
