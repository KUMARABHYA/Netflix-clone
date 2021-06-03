import React,{useState} from 'react'
import { useContext } from 'react';
import AuthContext from '../stores/auth-context';

import Sdata from './Sdata'

function Home() {
    const [img, setImg] = useState("");
    const [video, setVideo] = useState(null);

    const onPlay = (video_uri) => {
        setVideo(video_uri)
    }

    const authCtx = useContext(AuthContext);

    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
        authCtx.logout();
    }
    return (
        <div className="header ">
            <div className="container-fluid ">
                <div className="conatiner input_area ">
                <input className="input_a" type=" text" placeholder=" Search..." onChange={e => {
                setImg(e.target.value)
            }} />
                </div>
            </div>


            <div className="menu-items container-fluid mt-5">
                <div className="row ">
                    <div className="col-11 mx-auto ">
                        <div className="row my-5 area_one ">
                            {
                                
                                Sdata.filter((elem)=>{
                                    if(img === ""){
                                        return elem;

                                    }else if (elem.sname.toLowerCase().includes(img.toLowerCase())){
                                        return elem;
                                    }
                                        
                                    
                                    })
                                    .map((elem) => {
                                        return <div key={elem.id}>
                                        
                                            <div className=" item1 col-12 col-md-6 col-lg-6 col-xl-10  ">
                                                <img className="home_pic" src={`/imagesrc/${elem.imgsrc}`} alt="img" />
                                                <div className="card_info">
                                                    <p className="card_category text-light">{elem.title}</p>
                                                    <h3 className="card_name text-light">{elem.sname}</h3>
                                                    {/* {isLoggedIn && ( */}
                                                 <a className="btn" href={elem.links} target="_self" ><button>Watch Now</button></a>
                                            {/* // <button><iframe src ={elem.links} />Play</button> */}
                                                    {/* )} */}
                                                    
                                                    </div>
    
    
                                            </div>
                                        </div>
                                    })
                                }
                               
                            





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
