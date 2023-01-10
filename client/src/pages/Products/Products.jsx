import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import './Products.scss';

function Products() {

  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort,setSort] = useState(null);

  return (
    <div className='products'>
        <div className='left'>
          <div className="filterItem">
            <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id='1' value={1} />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='2' value={2} />
              <label htmlFor="2">Jeans</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id='3' value={3} />
              <label htmlFor="3">Clothes</label>
            </div>
          </div>
          <div className="filterItem">
            <h2>Filter by price</h2>
            <div className="inputItem">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
          </div>
          <div className="filterItem">
            <h2>Short by</h2>
            <div className="inputItem">
              <input type="radio" id='asc' value="asc" name="price" onChange={(e)=>setSort('asc')}/>
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="inputItem">
              <input type="radio" id='desc' value="desc" name="price" onChange={(e)=>setSort('desc')}/>
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className='right'>
            <img src="https://cdn.pixabay.com/photo/2021/03/28/10/20/not-today-6130906_960_720.jpg" alt="" className='catImg'/>
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
        </div>
    </div>
  )
}

export default Products