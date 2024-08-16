import { http, HttpResponse } from "msw";

import { ApproveOrderBody } from "../approve-order";

export const approveOrderMock = http.patch<ApproveOrderBody, never>(
  "orders/:orderId/approve",
  ({ params }) => {
    if (params.orderId === "error-order-id") {
      return new HttpResponse(null, { status: 400 });
    }
    return new HttpResponse(null, { status: 204 });
  },
);
