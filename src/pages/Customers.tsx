import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGN1c3RvbWVyc3xlbnwwfHwwfHx8MA%3D%3D"
const img2 = "https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGN1c3RvbWVyc3xlbnwwfHwwfHx8MA%3D%3D"
const arr: DataType[] = [
  {
    avatar: <img src={img1} alt="Shoes" />,
    name: "Jordan ",
    gender: "male",
    email: "customer1@gmail.com",
    role: "",
    action: (<button><FaTrash/></button>)  },
  {
    avatar: <img src={img2} alt="Shoes" />,
    name: "Nike ",
    gender: "female",
    email: "customer2@gmail.com",
    role: "",
    action: (<button><FaTrash/></button>)  },
  {
    avatar: <img src={img1} alt="Shoes" />,
    name: "Puma ",
    gender: "male",
    email: "customer3@gmail.com",
    role: "",
    action: (<button><FaTrash/></button>)
  },
];

const Customers = () => {
  const [data]=useState<DataType[]>(arr);
  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Customers",true),[]);
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main>
       <Table/>
      </main>
    </div>
  )
}

export default Customers
