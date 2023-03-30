import React from 'react'
import { useAppContext } from '../appContext/appContext';
import {FcLike} from 'react-icons/fc'
import {FcStart} from 'react-icons/fc'
import '../Home/Test/Test.css'
const Favorites = () => {
    const {favorites,addToFavorites}=useAppContext()
    console.log('favorites: ',favorites)
return (
    <div>
    {favorites.length>0?favorites.map((el)=>
        <div className="card-content">
        <header>
            <img src={el.imgUrl} alt=''/>
            <h3 className='card-text1'>{el.vidTitle}</h3>
            <h2 className='card-text2'>{el.creator}</h2>
        </header>
        <div className="card-bio">
            <p className='card-text1'>{el.date}</p>
            <div className='card-btns'>
            <a  href={el.vidUrl}  target="_blank" rel='noreferrer'>
            <FcStart size='2.3rem'/></a>
            <FcLike size='2.3rem' onClick={()=>addToFavorites(el)}/>
        </div>
        </div>
    </div>
)
    :<h1>You have no favorites yet</h1>}
    </div>
)
}
export default Favorites