// import {createContext,useState} from 'react'

// export const FavouriteContext =createContext({
//         ids: [],
//         addFavourite:(id)=>{},
//         removeFavourite:(id)=>{}

// });

// function favouritesContextProvider({children}){
//     const [favouriteMealsIds, setFavouriteMealsIds]= useState([])

//     function addFavourite(id){
//         setFavouriteMealsIds((currentFavIds)=>[...currentFavIds, id])
        
//     };
//     function removeFavourite(id){
//         setFavouriteMealsIds((currentFavIds)=> 
//             currentFavIds.filter((mealId)=> mealId!==id))

//     };
//     const value={
//         ids:favouriteMealsIds,
//         addFavourite:addFavourite,
//         removeFavourite:removeFavourite

//     }

//     return <FavouriteContext.Provider value={value}>{children}</FavouriteContext.Provider>
// }

// export default favouritesContextProvider;
