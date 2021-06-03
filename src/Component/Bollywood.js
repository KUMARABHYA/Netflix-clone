import React,{useState} from 'react'
import Sdata from './Sdata';
import './Bollywood.css';

function Bollywood() {
    const [items, setItem] = useState(Sdata);

    const filterItem = (categItem) => {
        const updatedItems = Sdata.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItem(updatedItems);
    }

    const filterItems = (categItems) => {
        const updatedItem = Sdata.filter((curEle) => {
            return curEle.category === categItems;
        });
        setItem(updatedItem);
    }
    return (
        <div className="bollywood_area">
           <div className="movie_cate">
           <button className="movies_btn" onClick={()=> filterItem('bollywood')}>Bollywood</button>
           <button className="movies_btn" onClick={()=> filterItems('hollywood')}>Hollywood</button>

           </div>

            {/* my main area */}

            <div className="menu-items container-fluid mt-5">
                <div className="row ">
                    <div className="col-9 mx-auto ">
                        <div className="row my-5 ">
                            {
                                items.map((elem) => {
                                    const { sname, imgsrc, title, links } = elem;

                                    return (
                                        <div className=" item2 col-12 col-md-6 col-lg-6 col-xl-3  ">
                                            <img className="item_two_img" src={`/imagesrc/${imgsrc}`} alt="img" />
                                            <div className="card_info">
                                                <p className="card_category text-light">{title}</p>
                                                <h3 className="card_name text-light">{sname}</h3>
                                                <a className="item_two_btn " href={links} target="_self"><button>Watch Now</button></a>
                                            </div>


                                        </div>
                                    )
                                })
                            }





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bollywood
