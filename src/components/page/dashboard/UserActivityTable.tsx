"use client";

import { useGetUsers } from "@/hooks/user.hook";
import { IUser } from "@/types";
import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";

const columns = [
  {
    key: "image",
    label: "Image",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "lastLogin",
    label: "Last Login",
  },
];

const UserActivityTable = () => {
  const { data: users, isPending } = useGetUsers({ role: "" });

  console.log(users);
  return (
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
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell> </TableCell>
              <TableCell>
                <Spinner />
              </TableCell>
            </TableRow>
          ) : (
            users?.data?.map((user: IUser) => (
              <TableRow key={user._id}>
                <TableCell>
                  <Image
                    src={user?.profilePhoto}
                    alt="profile photo"
                    width={100}
                    height={100}
                    className="object-cover rounded-lg min-w-[100px] h-[75px]"
                  />
                </TableCell>
                <TableCell>{user?.name}</TableCell>
                <TableCell>{user?.email}</TableCell>
                <TableCell>{user?.role}</TableCell>
                <TableCell>
                  {formatDistanceToNow(new Date(user?.lastLogin), {
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserActivityTable;
