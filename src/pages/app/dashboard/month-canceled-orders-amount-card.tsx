import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthCanceledOrdersAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthCanceledOrdersAmountCard() {
  const { data: getMonthCanceledOrdersAmountFn } = useQuery({
    queryKey: ["month-canceled-orders-amount"],
    queryFn: getMonthCanceledOrdersAmount,
  });
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthCanceledOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthCanceledOrdersAmountFn.amount}
            </span>
            <p className="text-sm text-muted-foreground">
              {getMonthCanceledOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {getMonthCanceledOrdersAmountFn.diffFromLastMonth}%
                </span>
              )}{" "}
              em relação ao mês anterior
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
