"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";

const data = [
  { month: "Jan", users: 1200, activeUsers: 800 },
  { month: "Feb", users: 1500, activeUsers: 1000 },
  { month: "Mar", users: 1800, activeUsers: 1200 },
  { month: "Apr", users: 2200, activeUsers: 1500 },
  { month: "May", users: 2600, activeUsers: 1800 },
  { month: "Jun", users: 3000, activeUsers: 2100 },
  { month: "Jul", users: 3500, activeUsers: 2400 },
  { month: "Aug", users: 4000, activeUsers: 2800 },
  { month: "Sep", users: 4400, activeUsers: 3000 },
  { month: "Oct", users: 4800, activeUsers: 3300 },
  { month: "Nov", users: 5200, activeUsers: 3600 },
  { month: "Dec", users: 5800, activeUsers: 4000 },
];

export function UserGrowthChart() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">User Growth Analysis</h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
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
                value: "Users",
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
            <Area
              type="monotone"
              dataKey="users"
              name="Total Users"
              stroke="hsl(var(--chart-1))"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="activeUsers"
              name="Active Users"
              stroke="hsl(var(--chart-2))"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}