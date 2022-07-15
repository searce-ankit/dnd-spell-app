import React, { useState,useEffect } from 'react';
import { getPaginatedFavouriteSpells } from '../../services/SpellService';
import {SpellListItem} from './SpellListItem';
import { Pagination } from '../common/Pagination';
import { useSelector } from 'react-redux';
import { selectFavourites } from '../../features/spell/spellSlice';

import './FavouriteSpellList.css';

export function FavouriteSpellList() {

    let favSpells = useSelector(selectFavourites);

    const [spells,setSpells]= useState([]);
    const [totalpages,setTotalPages]= useState(0);
    const [page,setPage] = useState(1);

    const pageChangeHandler = page =>{
        setPage(page);
    }

    const updateListHandler = () =>{
        setPage(1);
    }

    useEffect(() => {
        getPaginatedFavouriteSpells(favSpells,page).then(response=>{
            setSpells(response.results);
            setTotalPages(response.totalPages);
        });
    },[page,favSpells]);


    if(spells.length === 0){
       return (
       <div className='spell-list'>
        <div data-testid="spell-not-found" className='spell-not-found'>No Spell found as favourite.</div>
       </div>
       );
    }

    return (
        <div className='spell-list'>
        <div>
        { 
            spells.map(item=>{
                return <SpellListItem key={item.index} spell={item} isFavourite={ favSpells.findIndex(it=> it.index === item.index)>=0 } updateSpells={updateListHandler} />
            })
        }
       </div>
       <Pagination totalPages={totalpages} page={page} onPageChange={pageChangeHandler} />
       </div>
    );

}