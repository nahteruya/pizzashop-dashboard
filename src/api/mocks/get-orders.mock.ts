import { http, HttpResponse } from "msw";

import type { GetOrdersResponse } from "../get-orders";

type Orders = GetOrdersResponse["orders"];
type OrderStaus = GetOrdersResponse["orders"][number]["status"];

const statuses: OrderStaus[] = [
  "canceled",
  "delivered",
  "delivering",
  "pending",
  "processing",
];

const orders: Orders = Array.from({ length: 60 }).map((_, i) => {
  return {
    orderId: `order-${i + 1}`,
    createdAt: new Date().toISOString(),
    status: statuses[i % 5],
    customerName: `Customer ${i + 1}`,
    total: 2500,
  };
});

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  "/orders",
  async ({ request }) => {
    const { searchParams } = new URL(request.url);

    const pageIndex = searchParams.get("pageIndex")
      ? Number(searchParams.get("pageIndex"))
      : 0;

    const customerName = searchParams.get("customerName");
    const orderId = searchParams.get("orderId");
    const status = searchParams.get("status");

    let filteredOrdes = orders;

    if (customerName) {
      filteredOrdes = filteredOrdes.filter((order) =>
        order.customerName.includes(customerName),
      );
    }
    if (orderId) {
      filteredOrdes = filteredOrdes.filter((order) =>
        order.orderId.includes(orderId),
      );
    }
    if (status) {
      filteredOrdes = filteredOrdes.filter((order) => order.status === status);
    }

    const paginateOrders = filteredOrdes.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    );

    return HttpResponse.json({
      orders: paginateOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrdes.length,
      },
    });
  },
);
