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

const UserTable = () => {
  const { data: users, isPending } = useGetUsers({ role: "USER" });
  const { mutate: handleUpdateUserInfo, isPending: isUpdating } =
    useUpdateUserInfo();

  const { mutate: deleteUser, isPending: isDeleteUserPending } =
    useDeleteUser();

  const handleUserBlock = (userEmail: string, isBlocked: boolean) => {
    const updatedData = { isBlocked: isBlocked ? false : true };
    handleUpdateUserInfo({ email: userEmail, updatedData });
  };

  const handleDeleteUser = (userId: string) => {
    deleteUser(userId);
  };

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
                <TableCell>{user?.isVerified ? "Yes" : "No"}</TableCell>
                <TableCell>{user?.isBlocked ? "Yes" : "No"}</TableCell>
                <TableCell className="flex gap-2">
                  <Button
                    onClick={() =>
                      handleUserBlock(user?.email, user?.isBlocked)
                    }
                    color="primary"
                    size="sm"
                    variant="shadow"
                    className="min-w-[70px]"
                  >
                    {isUpdating ? (
                      <Spinner size="sm" color="white" />
                    ) : user?.isBlocked ? (
                      "Unblock"
                    ) : (
                      "Block"
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

export default UserTable;
