import { useQuery } from "@tanstack/react-query";
import { BarChart, Loader2 } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import colors from "tailwindcss/colors";

import { getPopularProducts } from "@/api/get-popular-products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PopularProductsChart() {
  const { data: getPopularProductsFn } = useQuery({
    queryKey: ["getPopularProducts"],
    queryFn: getPopularProducts,
  });

  const data = getPopularProductsFn;
  console.log(data);

  const COLORS = [
    colors.sky["500"],
    colors.amber["500"],
    colors.violet["500"],
    colors.emerald["500"],
    colors.rose["500"],
  ];

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        {getPopularProductsFn ? (
          <ResponsiveContainer width="100%" height={248}>
            <PieChart style={{ fontSize: 12 }}>
              {data && (
                <Pie
                  data={data}
                  dataKey="amount"
                  nameKey="product"
                  cx="50%"
                  cy="50%"
                  outerRadius={86}
                  innerRadius={64}
                  strokeWidth={8}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius =
                      12 + innerRadius + (outerRadius - innerRadius);
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    return (
                      <text
                        x={x}
                        y={y}
                        className="fill-muted-foreground text-xs"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {data[index].product.length > 12
                          ? data[index].product.substring(0, 12).concat("...")
                          : data[index].product}{" "}
                        ({value})
                      </text>
                    );
                  }}
                >
                  {data.map((_, i) => (
                    <Cell
                      key={`cell-${i}`}
                      fill={COLORS[i]}
                      className="stroke-background"
                    />
                  ))}
                </Pie>
              )}
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
