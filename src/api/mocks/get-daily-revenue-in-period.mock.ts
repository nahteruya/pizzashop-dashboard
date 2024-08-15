import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailuRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    {
      date: "2024-08-05",
      receipt: 236,
    },
    {
      date: "2024-08-06",
      receipt: 351,
    },
    {
      date: "2024-08-07",
      receipt: 287,
    },
    {
      date: "2024-08-08",
      receipt: 147,
    },
    {
      date: "2024-08-09",
      receipt: 269,
    },
    {
      date: "2024-08-10",
      receipt: 384,
    },
    {
      date: "2024-08-11",
      receipt: 489,
    },
  ]);
});
