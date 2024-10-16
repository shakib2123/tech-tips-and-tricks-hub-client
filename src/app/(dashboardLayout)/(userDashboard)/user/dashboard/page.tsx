"use client";
import { useUser } from "@/context/user.provider";
import { useGetComments } from "@/hooks/comment.hook";
import { useGetMyAllPosts } from "@/hooks/post.hook";
import { IPost } from "@/types";
import { useEffect } from "react";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserDashboard = () => {
  const { user } = useUser();
  const { data: posts, refetch } = useGetMyAllPosts({ email: user?.email });

  const { data: comments, refetch: commentRefetch } = useGetComments({
    author: user?._id,
  });

  const upVotes = posts?.data?.reduce(
    (acc: number, post: IPost) => acc + post.upvote.length,
    0
  );
  const downVotes = posts?.data?.reduce(
    (acc: number, post: IPost) => acc + post.downvote.length,
    0
  );

  useEffect(() => {
    refetch();
    commentRefetch();
  }, [user?.email, refetch, commentRefetch]);

  const upVotesChartData = posts?.data?.map((post: IPost, indx: number) => ({
    name: `Post ${indx + 1}`,
    upvotes: post.upvote.length,
  }));
  const downVotesChartData = posts?.data?.map((post: IPost, indx: number) => ({
    name: `Post ${indx + 1}`,
    downvotes: post.downvote.length,
  }));

  return (
    <section className="max-w-screen-xl mx-auto p-3 min-h-screen">
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-8">
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
            Up votes
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {upVotes || 0}
          </h1>
        </div>
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h2 className="text-lg text-gray-700 font-medium text-center">
            Down votes
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {downVotes || 0}
          </h1>
        </div>
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h2 className="text-lg text-gray-700 font-medium text-center">
            Comments
          </h2>
          <h1 className="text-3xl text-gray-900 font-bold text-center">
            {comments?.data?.length || 0}
          </h1>
        </div>
      </div>
      <div className="my-4 space-y-4">
        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h3 className="text-lg text-gray-700 font-medium mb-4">Up Votes</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={upVotesChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="upvotes"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-4 rounded-xl shadow-lg shadow-gray-300 bg-slate-200 min-h-[120px] min-w-[250px] flex flex-col items-center justify-center">
          <h3 className="text-lg text-gray-700 font-medium mb-4">Down Votes</h3>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={downVotesChartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="downvotes"
                  stroke="#FFA500"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
