import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryClientWrapper = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
