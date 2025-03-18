import {configureStore} from '@reduxjs/toolkit'
import favouriteSlice from '../Redux/Favouite1'
import favouriteReducer from '../Redux/Favouite1'

export const store= configureStore({
    reducer:{
        favouriteMeals: favouriteReducer
    }
})
