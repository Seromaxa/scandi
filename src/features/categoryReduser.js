import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {AllCategories} from '../api/fetchers'

export const getCategories = createAsyncThunk('categories/getCategories',async()=>{
    
    const response = await AllCategories()
     
    return response
})

const Category = createSlice({
    name:'category',
    initialState:{
        categories:[],
        status:''
        
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(getCategories.pending,(state)=>{
            return {
                ...state,
                status:'Loading'
            } 
        })
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            return {
                ...state,
                categories:[...state.categories,...action.payload.data.categories],
                status:'Success'
            }
        })
        builder.addCase(getCategories.rejected,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                status:'Error'
            }
        })
    }
})

export default Category.reducer