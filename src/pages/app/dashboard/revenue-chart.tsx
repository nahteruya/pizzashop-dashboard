import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import colors from "tailwindcss/colors";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RevenueChart() {
  const data = [
    { date: "22/07", revenue: 1200 },
    { date: "23/07", revenue: 980 },
    { date: "24/07", revenue: 850 },
    { date: "25/07", revenue: 1600 },
    { date: "26/07", revenue: 2200 },
    { date: "27/07", revenue: 560 },
    { date: "28/07", revenue: 780 },
  ];
  return (
    <Card className="col-span-6">
      <CardHeader className="pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis
              dataKey="date"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dy={16}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={100}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
