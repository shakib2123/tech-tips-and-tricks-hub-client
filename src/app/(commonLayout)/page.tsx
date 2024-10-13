"use client";
import CreatePostInNewsFeed from "@/components/page/NewsFeed/CreatePostInNewsFeed";
import PostCard from "@/components/page/profile/Post/PostCard";
import { categories } from "@/constant/constant";
import useDebounce from "@/hooks/debounce.hook";
import { useGetAllPosts } from "@/hooks/post.hook";
import { IPost } from "@/types";
import { Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { useState } from "react";

const sortingFields = [
  { key: "", label: "Default" },
  { key: "-createdAt", label: "Newest" },
  { key: "createdAt", label: "Oldest" },
  { key: "upvote", label: "Most Liked" },
  { key: "downvote", label: "Less Liked" },
];

export default function NewsFeed() {
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue);

  const buildQuery = () => {
    const queryParams: string[] = [];

    if (debouncedSearchValue)
      queryParams.push(`searchValue=${debouncedSearchValue}`);
    if (sortValue) queryParams.push(`sortValue=${sortValue}`);
    if (filterValue) queryParams.push(`filterValue=${filterValue}`);
    return queryParams.length ? `?${queryParams.join("&")}` : "";
  };

  const { data: newPosts, isPending } = useGetAllPosts(buildQuery());

  return (
    <section className="mt-8 max-w-screen-xl mx-auto px-3 text-gray-900">
      <div className="flex flex-col lg:flex-row gap-4 md:items-center">
        <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full">
          <Input
            name="search"
            variant="faded"
            label="Search"
            size="lg"
            className="text-gray-700"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* Sort by */}
          <Select
            onChange={(e) => setSortValue(e.target.value)}
            label="Sort by"
            size="lg"
            variant="faded"
            placeholder="Select field"
            className="md:max-w-xs"
          >
            {sortingFields.map((field) => (
              <SelectItem
                key={field.key}
                value={field.key}
                className="text-gray-700"
              >
                {field.label}
              </SelectItem>
            ))}
          </Select>
          {/* Filter by category */}
          <Select
            onChange={(e) => setFilterValue(e.target.value)}
            label="Filter by"
            size="lg"
            variant="faded"
            placeholder="Select Category"
            className="md:max-w-xs"
          >
            {categories?.map((field) => (
              <SelectItem
                key={field.key}
                value={field.key}
                className="text-gray-700"
              >
                {field.name}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="lg:basis-4/12 w-full">
          <CreatePostInNewsFeed />
        </div>
      </div>

      {isPending ? (
        <div className="min-h-[calc(100vh-300px)] flex items-center justify-center ">
          <Spinner size="lg" />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-4 items-center my-8">
          {newPosts?.data?.length === 0 ? (
            <div className="min-h-[calc(100vh-300px)] flex items-center justify-center ">
              <p className="text-center text-lg">No post found</p>
            </div>
          ) : (
            newPosts?.data?.map((post: IPost) => (
              <PostCard key={post._id} post={post} />
            ))
          )}
        </div>
      )}
    </section>
  );
}
