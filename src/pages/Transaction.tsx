import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr: DataType[] = [
  {
    user: "puma",
    amount: 2424,
    discount: 200,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to={"/admin/transaction/adfaadf"}>Manage</Link>,
  },
  {
    user: "Nike",
    amount: 8342,
    discount: 334,
    quantity: 1,
    status: <span className="green">Shipped</span>,
    action: <Link to={"/admin/transaction/adfaadsdff"}>Manage</Link>,
  },
  {
    user: "David",
    amount: 9921,
    discount: 342,
    quantity: 9,
    status: <span className="purple">Delivered</span>,
    action: <Link to={"/admin/transaction/adfasdfadf"}>Manage</Link>,
  },
]

const Transaction = () => {
  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Transactions", true),[]);
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <Table />
      </main>
    </div>
  )
}

export default Transaction
