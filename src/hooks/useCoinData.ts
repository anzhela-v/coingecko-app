import { fetchCoinById } from "@/services/coins";
import { useQuery } from "@tanstack/react-query";

export const useCoinData = (id: string) => {
  return useQuery({
    queryKey: ["coin", id],
    queryFn: () => fetchCoinById(id),
    enabled: Boolean(id),
  });
};
