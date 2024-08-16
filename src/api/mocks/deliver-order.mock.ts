import { http, HttpResponse } from "msw";

import { DeliverOrderBody } from "../deliver-order";

export const deliverOrderMock = http.patch<DeliverOrderBody, never>(
  "orders/:orderId/deliver",
  ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }
    return new HttpResponse(null, { status: 204 });
  },
);
