import { IUser } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
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
    key: "followers",
    label: "Followers",
  },
  {
    key: "following",
    label: "Following",
  },
];

const FollowingActivityTable = ({ usersData }: { usersData: IUser[] }) => {
  return (
    <div className="my-4">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data to display."}>
          {usersData?.map((user: IUser) => (
            <TableRow key={user._id}>
              <TableCell>
                <Image
                  src={user?.profilePhoto}
                  alt="image"
                  width={100}
                  height={100}
                  className="object-cover rounded-lg size-16"
                />
              </TableCell>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.followers?.length}</TableCell>
              <TableCell>{user?.following?.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FollowingActivityTable;
