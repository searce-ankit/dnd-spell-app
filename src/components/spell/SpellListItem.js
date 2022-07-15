import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addToFavourite,removeFromfavourite } from '../../features/spell/spellSlice';

import './SpellListItem.css';

export function SpellListItem(props){

    const dispatch = useDispatch();
    let spell=props.spell;
    let isFavourite=props.isFavourite;

    const bookMarkHandler = () => {
        if(isFavourite){
            dispatch(removeFromfavourite(spell.index));
        }else{
            dispatch(addToFavourite(spell));
            if(props.updateSpells){
                props.updateSpells();
            }
        }
    }

    return (<div className='spell-li'>
       <Link to={"/spell/"+ spell.index}>{ spell.name }</Link>
       <FontAwesomeIcon className='fav-icon' icon={faBookmark} color={isFavourite?"gold":"gray"} onClick={bookMarkHandler} />
    </div>);
}