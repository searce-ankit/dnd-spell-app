import React, { useState,useEffect } from 'react';
import { getPagedSpells } from '../../services/SpellService';
import {SpellListItem} from './SpellListItem';
import { Pagination } from '../common/Pagination';
import { useSelector } from 'react-redux';
import { selectFavourites } from '../../features/spell/spellSlice';

import './SpellList.css';

export function SpellList() {

    const favSpells = useSelector(selectFavourites);

    const [spells,setSpells]= useState(null);
    const [totalpages,setTotalPages]= useState(0);
    const [page,setPage] = useState(1);

    const pageChangeHandler = page =>{
        setSpells(null);
        setPage(page);
    }

    useEffect(() => {
        getPagedSpells(page).then(response=>{
            setSpells(response.results);
            setTotalPages(response.totalPages);
        });
    },[page]);


    if(spells==null){
        return (
            <div className='spell-list'>
                <div className='spell-loading'>Loading...</div>
            </div>
            );
    }

    if(spells.length === 0){
        return (
        <div className='spell-list'>
         <div className='spell-not-found'>No Spell found as favourite.</div>
        </div>
        );
     }

    return (
        <div className='spell-list'>
        <div>
        { 
            spells.map(item=>{
                return <SpellListItem key={item.index} spell={item} isFavourite={ favSpells.findIndex(it=> it.index === item.index)>=0 } />
            })
        }
       </div>
       <Pagination totalPages={totalpages} page={page} onPageChange={pageChangeHandler} />
       </div>
    );

}