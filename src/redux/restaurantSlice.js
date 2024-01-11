import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchrestaurant = createAsyncThunk('restaurantList/fetchrestaurant',()=>{
    const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result;
})


const restaurentSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, //pending
        allrestaurent:[],
        searchrest:[],//resolve
        error:''//reject
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchrestaurant.pending,(state)=>{
            state.loading = true;
        })

        builder.addCase(fetchrestaurant.fulfilled,(state,action)=>{
            state.loading = false;
            state.allrestaurent = action.payload;
            state.searchrest = action.payload;
            state.error = ''
        })

        builder.addCase(fetchrestaurant.rejected,(state,action)=>{
            state.loading = false;
            state.allrestaurent = ''
            state.error = action.error.message;
        })
    },
    reducers:{
        search:(state,action)=>{
          state.allrestaurent =   state.searchrest.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

export const {search} = restaurentSlice.actions
export default restaurentSlice.reducer