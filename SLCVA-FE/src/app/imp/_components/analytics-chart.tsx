"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { month: "January", income: 60, trend: 58 },
  { month: "February", income: 55, trend: 60 },
  { month: "March", income: 70, trend: 65 },
  { month: "April", income: 65, trend: 70 },
  { month: "May", income: 75, trend: 75 },
  { month: "June", income: 85, trend: 80 },
  { month: "July", income: 90, trend: 85 },
  { month: "August", income: 85, trend: 83 },
  { month: "September", income: 65, trend: 70 },
  { month: "October", income: 40, trend: 55 },
  { month: "November", income: 55, trend: 65 },
  { month: "December", income: 95, trend: 90 },
];

export function AnalyticsChart() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Monthly Income Analysis</h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis
              dataKey="month"
              className="text-sm"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis
              className="text-sm"
              tick={{ fill: 'hsl(var(--foreground))' }}
              label={{
                value: "Income (K)",
                angle: -90,
                position: "insideLeft",
                fill: 'hsl(var(--foreground))',
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))' }}
            />
            <Legend />
            <Bar
              dataKey="income"
              name="Monthly Income"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
            />
            <Line
              type="monotone"
              dataKey="trend"
              name="Income Trend"
              stroke="hsl(var(--destructive))"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}