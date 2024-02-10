import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom"

const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    price: 2342,
    quantity: 4,
    _id: "sdfsf",
  }

]

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "spidey",
    address: " 77 Black Street",
    city: "NewYork",
    state: "New York",
    country: "United",
    pinCode: 23423,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "asdfasd"

  })
  const { name, address, city, country, state, pinCode, subtotal, shippingCharges, tax, discount, total, status } = order;
  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }))
  }
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className='product-management' style={{overflowY:"auto"}}>
        <section style={{padding:"2rem"}}>
          <h2>Order Items</h2>
          {
            order.orderItems.map((i) => (
              <ProductCard
                name={i.name}
                photo={i.photo}
                _id={i._id}
                price={i.price}
                quantity={i.quantity}
              />
            ))
          }
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name : {name}</p>
          <p>Address : {`${address}, ${city}, ${city}, ${state}, ${country}, ${pinCode}`}</p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax : {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>
          <h5>Status Info</h5>
          <p>Status: {" "}
            <span
              className={
                status === "Delivered" ? "purple"
                  : status === "Shipped" ? "green"
                    : "red"
              }
            >{status}</span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt="name" />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span style={{marginLeft:"auto"}}>${price} X {quantity} = ${price * quantity}</span>
  </div>
)
export default TransactionManagement
