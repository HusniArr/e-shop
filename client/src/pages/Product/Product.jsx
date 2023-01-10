import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';


function Product() {
  const [ selectedImg, setSelectedImg ] = useState(0);
  const [ quantity, setQuantity ] = useState(1);
  const images = [
    'https://cdn.pixabay.com/photo/2021/03/28/10/20/not-today-6130906_960_720.jpg',
    'https://cdn.pixabay.com/photo/2021/03/28/09/39/flower-6130767_960_720.jpg'
  ];
  return (
    <div className='product'>
      <div className='left'>
        <div className="images">
          <img src={images[0]} alt="" onClick={(e)=>setSelectedImg(0)}/>
          <img src={images[1]} alt="" onClick={(e)=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className='right'>
          <h1>Title</h1>
          <span className='price'>$19</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eveniet praesentium aliquam. Doloremque sit nesciunt ducimus aut repellendus ea quidem!.
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity(prev=>prev - 1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity(prev=>prev + 1)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon/> ADD TO CART
          </button>
          <div className="links">
            <div className="item">
              <FavoriteBorderIcon/> ADD TO WISHLIST
            </div>
            <div className="item">
              <CompareIcon/> ADD TO COMPARE
            </div>
          </div>
          <div className="info">
            <span>Vendor : Polo</span>
            <span>Product Type : T-Shirt</span>
            <span>Tag : T-Shirt, Women, Top</span>
          </div>
          <hr />
          <div className="details">
            <span>DESCRIPTION</span>
            <hr />
            <span>ADDITIONAL INFORMATION</span>
            <hr />
            <span>FAQ</span>
          </div>
      </div>
    </div>
  )
}

export default Product