"use client";

import { useGetPaymentsHistory } from "@/hooks/payment.hook";
import { useGetAllPosts } from "@/hooks/post.hook";
import { useGetUsers } from "@/hooks/user.hook";
import { IPayment, IPost, IUser } from "@/types";
import { Tooltip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

interface ChartData {
  month: string;
  payments: number;
  posts: number;
  users: number;
}

const AdminDashboard = () => {
  const { data: posts } = useGetAllPosts("");

  const { data: payments } = useGetPaymentsHistory();

  const { data: users } = useGetUsers({ role: "" });

  const paymentAmount = payments?.data?.reduce(
    (acc: number, payment: IPayment) => acc + payment?.amount,
    0
  );

  const [chartData, setChartData] = useState<ChartData[]>([]);
  useEffect(() => {
    if (posts && payments && users) {
      const monthlyData: { [key: string]: ChartData } = {};

      // Aggregate payments by month
      payments.data.forEach((payment: IPayment) => {
        const month = format(new Date(payment.createdAt), "yyyy-MM");
        if (!monthlyData[month]) {
          monthlyData[month] = { month, payments: 0, posts: 0, users: 0 };
        }
        monthlyData[month].payments += payment.amount;
      });

      // Count posts by month
      posts.data.forEach((post: IPost) => {
        const month = format(new Date(post.createdAt), "yyyy-MM");
        if (!monthlyData[month]) {
          monthlyData[month] = { month, payments: 0, posts: 0, users: 0 };
        }
        monthlyData[month].posts += 1;
      });

      // Count users by month
      users.data.forEach((user: IUser) => {
        const month = format(new Date(user.createdAt), "yyyy-MM");
        if (!monthlyData[month]) {
          monthlyData[month] = { month, payments: 0, posts: 0, users: 0 };
        }
        monthlyData[month].users += 1;
      });

      const chartData = Object.entries(monthlyData).map(([, data]) => ({
        ...data,
      }));

      setChartData(chartData);
    }
  }, [posts, payments, users]);

  return (
    <section className="max-w-screen-xl mx-auto p-3 min-h-screen">
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8">
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h2 className="text-lg text-gray-700 font-medium text-center">
            Posts
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {posts?.data?.length || 0}
          </h1>
        </div>
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h2 className="text-lg text-gray-700 font-medium text-center">
            Total Payment
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {paymentAmount || 0}
          </h1>
        </div>

        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h2 className="text-lg text-gray-700 font-medium text-center">
            Total User
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {users?.data?.length || 0}
          </h1>
        </div>
      </div>

      <div>
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h3 className="text-lg text-gray-700 font-medium mb-4">Up Votes</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="payments"
                  stackId="1"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
                <Area
                  type="monotone"
                  dataKey="posts"
                  stackId="1"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stackId="1"
                  stroke="#ffc658"
                  fill="#ffc658"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
