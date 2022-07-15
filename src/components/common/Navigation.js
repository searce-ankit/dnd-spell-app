import { Link } from 'react-router-dom';

import './Navigation.css';

export function Navigation(){

    return (
        <div className='navigation'>
            <Link to='/' >Home</Link>
            <Link to='/favourite' >Favourites</Link>
        </div>
    );

}