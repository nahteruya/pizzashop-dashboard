import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    {
      amount: 31,
      product: "Bolo de abacaxi",
    },
    {
      amount: 29,
      product: "Banoffe",
    },
    {
      amount: 27,
      product: "Brigadeiro",
    },
    {
      amount: 25,
      product: "Tiramissu",
    },
    {
      amount: 24,
      product: "Pudim",
    },
  ]);
});
