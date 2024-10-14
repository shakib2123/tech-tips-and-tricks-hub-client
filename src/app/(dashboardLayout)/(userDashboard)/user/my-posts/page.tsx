"use client";
import CreatePost from "@/components/shared/CreatePost";
import { categories } from "@/constant/constant";
import { useUser } from "@/context/user.provider";
import useDebounce from "@/hooks/debounce.hook";
import { useGetAllPosts } from "@/hooks/post.hook";
import { useGetCurrentUser } from "@/hooks/user.hook";
import { IPost } from "@/types";
import {
  Button,
  getKeyValue,
  Input,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const sortingFields = [
  { key: "", label: "Default" },
  { key: "-createdAt", label: "Newest" },
  { key: "createdAt", label: "Oldest" },
  { key: "upvote", label: "Most Liked" },
  { key: "downvote", label: "Less Liked" },
];
const columns = [
  {
    key: "image",
    label: "Image",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "description",
    label: "Description",
  },
  {
    key: "premium",
    label: "Premium",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const MyPosts = () => {
  const { user } = useUser();
  const {
    data: userData,
    isPending: isPendingUser,
    error,
    isSuccess,
  } = useGetCurrentUser();
  const data = userData?.data || {};

  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const debouncedSearchValue = useDebounce(searchValue);

  const buildQuery = () => {
    const queryParams: string[] = [];

    if (debouncedSearchValue)
      queryParams.push(`searchValue=${debouncedSearchValue}`);
    if (sortValue) queryParams.push(`sortValue=${sortValue}`);
    if (filterValue) queryParams.push(`filterValue=${filterValue}`);
    if (pageNumber) queryParams.push(`page=${pageNumber}`);
    return queryParams.length ? `?${queryParams.join("&")}` : "";
  };

  const { data: newPosts, isPending } = useGetAllPosts(buildQuery());

  console.log(newPosts?.data);

  return (
    <section className="max-w-screen-xl mx-auto p-3 min-h-screen">
      {/* sorting , filtering , search, create post */}
      <div className="flex flex-col lg:flex-row gap-4 md:items-center bg-slate-200 p-4 rounded-lg">
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
        <div
          className={`lg:basis-4/12 w-full ${
            !user?.email ? "hidden" : "block"
          }`}
        >
          {isPending ? (
            <div className="flex justify-center w-[200px]">
              <Spinner />
            </div>
          ) : (
            <CreatePost userData={data} />
          )}
        </div>
      </div>

      {/* posts */}
      <div className="my-4">
        <Table aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody emptyContent={"No data to display."}>
            {isPending ? (
              <TableRow className="flex items-center justify-between">
                <TableCell>
                  <Spinner />
                </TableCell>
                <TableCell>
                  <Spinner />
                </TableCell>
                <TableCell>
                  <Spinner />
                </TableCell>
                <TableCell>
                  <Spinner />
                </TableCell>
                <TableCell>
                  <Spinner />
                </TableCell>
              </TableRow>
            ) : (
              newPosts?.data?.map((post: IPost) => (
                <TableRow key={post._id}>
                  <TableCell>
                    <Image
                      src={post?.images[0]}
                      alt="image"
                      width={100}
                      height={100}
                      className="object-cover rounded-lg w-[100px] h-[75px]"
                    />
                  </TableCell>
                  <TableCell>{post?.category}</TableCell>
                  <TableCell>
                    <div
                      dangerouslySetInnerHTML={{ __html: post?.description }}
                    />
                  </TableCell>
                  <TableCell>{post?.isPremium ? "Yes" : "No"}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button color="primary" size="sm" variant="shadow">
                      <FaRegEdit className="text-lg" />
                    </Button>
                    <Button color="danger" size="sm" variant="shadow">
                      <MdDelete className="text-lg" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* pagination */}
      <div className="my-4 flex justify-center md:justify-start">
        <Pagination
          total={10}
          onChange={(e) => setPageNumber(e)}
          initialPage={1}
        />
      </div>
    </section>
  );
};

export default MyPosts;