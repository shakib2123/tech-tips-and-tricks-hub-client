"use client";
import {
  useDeleteUser,
  useGetUsers,
  useUpdateUserInfo,
} from "@/hooks/user.hook";
import { IUser } from "@/types";
import {
  Button,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { MdDelete } from "react-icons/md";

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
    key: "mobileNumber",
    label: "Mobile Number",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "isVerified",
    label: "Verified",
  },
  {
    key: "isBlocked",
    label: "Blocked",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

const AdminsTable = () => {
  const { data: users, isPending } = useGetUsers({ role: "ADMIN" });
  const { mutate: handleUpdateUserInfo, isPending: isUpdating } =
    useUpdateUserInfo();

  const { mutate: deleteUser, isPending: isDeleteUserPending } =
    useDeleteUser();

  const handleUserRole = (userEmail: string, role: string) => {
    const updatedData = { role: role === "ADMIN" ? "USER" : "ADMIN" };
    handleUpdateUserInfo({ email: userEmail, updatedData });
  };

  const handleDeleteUser = (userId: string) => {
    deleteUser(userId);
  };

  return (
    <div className="my-4">
      <div className="mb-4">
        <Button color="primary" className="">
          <Link href="/admin/create-admin">Create Admin</Link>
        </Button>
      </div>
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
                <TableCell>{user?.mobileNumber}</TableCell>
                <TableCell>{user?.role}</TableCell>
                <TableCell>{user?.isVerified ? "Yes" : "No"}</TableCell>
                <TableCell>{user?.isBlocked ? "Yes" : "No"}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    onClick={() => handleUserRole(user?.email, user?.role)}
                    color="primary"
                    size="sm"
                    variant="shadow"
                    className="min-w-[80px]"
                  >
                    {isUpdating ? (
                      <Spinner size="sm" color="white" />
                    ) : user?.role === "ADMIN" ? (
                      "Make User"
                    ) : (
                      "Make Admin"
                    )}
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    color="danger"
                    size="sm"
                    variant="shadow"
                  >
                    {isDeleteUserPending ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      <MdDelete className="text-lg" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminsTable;
