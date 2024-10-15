import { IPayment } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { formatDistanceToNow } from "date-fns";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "amount",
    label: "Amount",
  },
  {
    key: "transactionId",
    label: "Transaction ID",
  },
  {
    key: "subscriptionDate",
    label: "Subscription Date",
  },
  {
    key: "expireSubscriptionDate",
    label: "Expire Subscription Date",
  },
];

const PaymentTable = ({ payments }: { payments: IPayment[] }) => {
  return (
    <div className="my-4">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No data to display."}>
          {payments?.map((payment: IPayment) => (
            <TableRow key={payment._id}>
              <TableCell>{payment?.name}</TableCell>
              <TableCell>{payment?.email}</TableCell>
              <TableCell>{payment?.amount}</TableCell>
              <TableCell>{payment?.transactionId}</TableCell>
              <TableCell>
                {formatDistanceToNow(new Date(payment?.subscriptionDate), {
                  addSuffix: true,
                })}
              </TableCell>
              <TableCell>
                {formatDistanceToNow(
                  new Date(payment?.expireSubscriptionDate),
                  { addSuffix: true }
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentTable;
