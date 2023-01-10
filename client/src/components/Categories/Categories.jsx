import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://cdn.pixabay.com/photo/2021/03/28/10/20/not-today-6130906_960_720.jpg"/>
                <button>
                    <Link to="/product/1" className='link'>Product 1</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://cdn.pixabay.com/photo/2014/05/21/14/54/feet-349687_960_720.jpg"/>
                <button>
                    <Link to="/product/1" className='link'>Product 2</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://cdn.pixabay.com/photo/2015/09/05/21/57/girl-925635_960_720.jpg"/>
                <button>
                    <Link to="/product/1" className='link'>Product 3</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://i.pinimg.com/736x/a8/00/38/a8003871c2c0abe27d96ab5cef8a1420--black-letterman-jacket-letterman-jackets.jpg"/>
                    <button>
                        <Link to="/product/1" className='link'>Product 4</Link>
                    </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://ae01.alicdn.com/kf/HTB113hiGH9YBuNjy0Fgq6AxcXXaT/2018-Winter-Plus-Velvet-Thickening-Children-s-Warm-Clothing-Boys-Girls-Short-PU-Leather-Jacket-Kids.jpg"/>
                    <button>
                        <Link to="/product/1" className='link'>Product 5</Link>
                    </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://ae01.alicdn.com/kf/HTB113hiGH9YBuNjy0Fgq6AxcXXaT/2018-Winter-Plus-Velvet-Thickening-Children-s-Warm-Clothing-Boys-Girls-Short-PU-Leather-Jacket-Kids.jpg"/>
                <button>
                    <Link to="/product/1" className='link'>Product 6</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories