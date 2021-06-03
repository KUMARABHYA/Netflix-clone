import React,{ useState } from 'react'
import Sdata from './Sdata';

import ReactPlayer from 'react-player';
function Video() {
    const [items, setItem] = useState(Sdata);
    const filterItem = (categItem) => {
        const updatedItems = Sdata.filter((curElem) => {
            return curElem.category === categItem;
        });
        setItem(updatedItems);
    }

    return (
        <div>
            {
            items.map((elem) => {
                const {links} = elem;
                  return (
                      <button><ReactPlayer url={elem.links} controls={false} /></button>
                      )
                    
                  
              })
            }

{/* <button type="button" onClick={(e) => { e.preventDefault(); window.location.href='http://google.com'; }} > Click here</button>. */}
        </div>
    )
}

export default Video;
