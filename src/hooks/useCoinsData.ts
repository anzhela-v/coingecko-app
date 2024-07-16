import { Item } from "@/interfaces";
import { fetchCoins } from "@/services/coins";
import { useQuery } from "@tanstack/react-query";

export const useCoinsData = () => {
  return useQuery<Item[], Error>({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });
};
