import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Gif.css'

const Gif = ({title, images}) => {

    // const setImg = (img) => {
    //     if(img.width = 200 ){
    //         return 'justify-content: center;'
    //     }
    // }
    return (
        <div className='gif'>
            <img src={images.fixed_height.url} alt={title}/>
            <div className='gif-info'>
            <h3>{title}</h3>
            </div>

            <div className='gif-fav'>
            <FavoriteBorderIcon />
            </div>
        </div>
    )
}

export default Gif
