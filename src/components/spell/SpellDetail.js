import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpellDetails } from '../../services/SpellService';

import './SpellDetail.css';

export function SpellDetail(){

    let { index } = useParams();

    const [spellDetails,setSpellDetails] = useState({});

    useEffect(() => {
        getSpellDetails(index).then(response=>{
            if(!response.error)
                setSpellDetails(response);
            else
                setSpellDetails(null); 
        })

    },[index]);

    if(!spellDetails){
            return (
                <div className='spell-detail'>
                    <div data-testid="spell-detail-not-found" className='spell-detail-not-found'>
                        Spell Not Found!
                    </div>
                </div>
            );
    }

    if(spellDetails && !spellDetails.name){
        return (
            <div className='spell-detail'>
                <div className='spell-detail-not-found'>
                    Loading..
                </div>
            </div>
        );
    }

    return (
        <div className='spell-detail'>
            <div className='spell-header'>{ spellDetails.name }</div>
            <div data-testid="spell-detail-container" className='spell-detail-container'>
                <p>
                    {spellDetails.desc}
                </p>
            </div>
        </div>
    );
}