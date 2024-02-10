import { ChangeEvent, FormEvent, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const ProductManagement = () => {
  const img1 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
  const [name, setName] = useState<string>("puma")
  const [price, setPrice] = useState<number>(23424)
  const [stock, setStock] = useState<number>(234)
  const [photo, setPhoto] = useState<string>(img1);

  const [nameUpdate, setNameUpdate] = useState<string>(name)
  const [priceUpdate, setPriceUpdate] = useState<number>(price)
  const [stockUpdate, setStockUpdate] = useState<number>(stock)
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof (reader.result) === "string") {
          setPhotoUpdate(reader.result)
        }
      }
    }
  }
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate)
    setPrice(priceUpdate)
    setStock(stockUpdate)
    setPhoto(photoUpdate)
  }
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className='product-management'>
        <section>
          <strong>ID - adfdfkja</strong>
          <img src={photo} alt="" />
          <p>{name}</p>
          {
            stock > 0 ? (<span className='green'>{stock} Available</span>) : (<span className='red'>UnAvailable</span>)
          }
          <h3>${price}  </h3>
        </section>
        <article>
          <form action="" onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" placeholder='Name' value={nameUpdate} onChange={(e) => setNameUpdate(e.target.value)} />
            </div>
            <div>
              <label htmlFor="">Price</label>
              <input type="number" placeholder='Price' value={priceUpdate} onChange={(e) => setPriceUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label htmlFor="">Stock</label>
              <input type="number" placeholder='Stock' value={stockUpdate} onChange={(e) => setStockUpdate(Number(e.target.value))} />
            </div>
            <div>
              <label htmlFor="">Photo</label>
              <input type="file" onChange={changeImageHandler} />
            </div>
            {
              photoUpdate && <img src={photoUpdate} alt="Image" />
            }
            <button type='submit'>Update</button>
          </form>
        </article>
      </main>
    </div>
  )
}



export default ProductManagement;
