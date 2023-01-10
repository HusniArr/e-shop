import React from 'react';
import Card from '../Card/Card';
import './FeaturedProduct.scss';

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id:1,
            img:'https://cdn.pixabay.com/photo/2021/03/28/10/20/not-today-6130906_960_720.jpg',
            img2:'https://cdn.pixabay.com/photo/2021/03/28/09/39/flower-6130767_960_720.jpg',
            title:'Tshirt Women',
            oldPrice:15,
            price:12,
            isNew:true
        },
        {
            id:2,
            img:'https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg',
            title:'Jeans Men',
            oldPrice:15,
            price:12,
            isNew:true
        },
        {
            id:3,
            img:'https://cdn.pixabay.com/photo/2015/09/05/21/57/girl-925635_960_720.jpg',
            title:'Jeans Denim Women',
            oldPrice:15,
            price:12
        },
        {
            id:4,
            img:'https://i.pinimg.com/736x/a8/00/38/a8003871c2c0abe27d96ab5cef8a1420--black-letterman-jacket-letterman-jackets.jpg',
            title:'Jacket lettermen',
            oldPrice:15,
            price:12
        },
        // {
        //     id:5,
        //     img:'https://ae01.alicdn.com/kf/HTB113hiGH9YBuNjy0Fgq6AxcXXaT/2018-Winter-Plus-Velvet-Thickening-Children-s-Warm-Clothing-Boys-Girls-Short-PU-Leather-Jacket-Kids.jpg',
        //     title:'Leather Jacket Kids',
        //     oldPrice:15,
        //     price:12
        // }
    ];

  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} product</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates omnis libero hic quasi autem culpa! Error, autem obcaecati.</p>
        </div>
        <div className='bottom'>
           {data.map(item=>(
            <Card item={item} key={item.id}/>
           ))}
        </div>
    </div>
  )
}

export default FeaturedProducts