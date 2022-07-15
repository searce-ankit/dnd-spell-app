const PAGE_SIZE=10;
const apiUrl= process.env.REACT_APP_APIURL;

export async function getPagedSpells(page){
    try{
        const response = await fetch(`${apiUrl}spells`);
        const result= await response.json();
        return {
            count:result.count,
            totalPages:Math.ceil(result.count/PAGE_SIZE),
            results:paginate(result.results,PAGE_SIZE,page)
        };
    }
    catch(error){
        throw error;
    }
}

export async function getSpellDetails(index){
    try{
        const response = await fetch(`${apiUrl}spells/${index}`);
        return await response.json();
    }
    catch(error){
        throw error;
    }
}

export function getPaginatedFavouriteSpells(spells,page){
    return new Promise((resolve,reject)=>{
        var response={
            totalPages:Math.ceil(spells.length/PAGE_SIZE),
            results:paginate(spells,PAGE_SIZE,page)
        };
        resolve(response);
    });
}

function paginate(array, page_size, page_number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}