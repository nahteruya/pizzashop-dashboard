import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthOrdersAmountCard() {
  const { data: getMonthOrdersAmountFn } = useQuery({
    queryKey: ["month-orders-amount"],
    queryFn: getMonthOrdersAmount,
  });
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {getMonthOrdersAmountFn ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {getMonthOrdersAmountFn.amount}
            </span>
            <p className="text-sm text-muted-foreground">
              {getMonthOrdersAmountFn.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  +{getMonthOrdersAmountFn.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {getMonthOrdersAmountFn.diffFromLastMonth}%
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
