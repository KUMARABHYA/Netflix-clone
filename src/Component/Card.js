import React from 'react'
import './Card.css';
function Card(props) {
    return (
        <>
            {/* <div className="container bg-danger"> */}
            <div className="menu-items container-fluid mt-5">
                <div className="row d-flex">
                    <div className="col-11 mx-auto ">
                        <div className="item1 ">

                        <div className=" card col-12 col-md-6 col-lg-6 col-xl-4 d-flex ">
                            <img src={`/imagesrc/${props.imgsrc}`} alt="img" />
                            <div className="card_info">
                                <p className="card_category">{props.title}</p>
                                <h3 className="card_name">{props.sname}</h3>
                                <a className="btn" href={props.links} target="_blank"><button>Watch Now</button></a>
                            </div>


                        </div>



                        </div>
                    </div>
                </div>
            </div>

                {/* <div className="row d-flex ">
                    <div className="col-md-3 ">
                       
                    </div>
                </div> */}





  
        </>
    )
}

export default Card
