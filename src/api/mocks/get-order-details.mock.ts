import { http, HttpResponse } from "msw";

import {
  GetOrderDetailsQuery,
  GetOrderDetailsResponse,
} from "../get-order-details";

export const getOrderDetailsMock = http.get<
  GetOrderDetailsQuery,
  never,
  GetOrderDetailsResponse
>("orders/:orderId", ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: "Client 1",
      email: "client1@email.com",
      phone: "(11) 99999-9999",
    },
    status: "pending",
    orderItems: [
      {
        id: "order-item-1",
        product: {
          name: "Bolo de abacaxi",
        },
        quantity: 1,
        priceInCents: 2500,
      },
      {
        id: "order-item-2",
        product: {
          name: "Brigadeiro",
        },
        quantity: 5,
        priceInCents: 400,
      },
    ],
    createdAt: new Date().toISOString(),
    totalInCents: 4500,
  });
});
