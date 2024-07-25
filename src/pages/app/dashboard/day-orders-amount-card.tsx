import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

import { getDayOrdersAmount } from "@/api/get-day-orders-amount";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DayOrdersAmountCard() {
  const { data: getDayOrdersAmountFn } = useQuery({
    queryKey: ["day-orders-amount"],
    queryFn: getDayOrdersAmount,
  });
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      {getDayOrdersAmountFn && (
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight">
            {getDayOrdersAmountFn.amount}
          </span>
          <p className="text-sm text-muted-foreground">
            {getDayOrdersAmountFn.diffFromYesterday >= 0 ? (
              <span className="text-emerald-500 dark:text-emerald-400">
                +{getDayOrdersAmountFn.diffFromYesterday}%
              </span>
            ) : (
              <span className="text-rose-500 dark:text-rose-400">
                {getDayOrdersAmountFn.diffFromYesterday}%
              </span>
            )}{" "}
            em relação a ontem
          </p>
        </CardContent>
      )}
    </Card>
  );
}
