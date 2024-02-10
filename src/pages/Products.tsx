/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img1 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
const img2 = "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
const arr: DataType[] = [
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
  {
    photo: <img src={img1} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 623,
    stock: 3,
    action: <Link to={"/admin/product/adfasdfadf"}>Manage</Link>
  },
  {
    photo: <img src={img2} alt="Shoes" />,
    name: "Macbook",
    price: 234234,
    stock: 234,
    action: <Link to={"/admin/product/sdfas"}>Manage</Link>
  },
];
const Products = () => {
  const [data] = useState<DataType[]>(arr)
  const Table = useCallback(TableHOC<DataType>(columns, data, "dashboard-product-box", "Products",true),
    []);
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <Table />
      </main>
      <Link className="create-product-btn" to="/admin/product/new"><FaPlus/></Link>
    </div>
  )
}

export default Products
