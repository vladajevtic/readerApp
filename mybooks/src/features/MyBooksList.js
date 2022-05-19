import { createSlice } from '@reduxjs/toolkit';

const initialState= [
    // {
    //     id: 1,
    //     title: "Some title",
    //     category: 'Some category',
    //     comment:" it's all good",
    //     myBooks:[{
    //       title: 'harry poter',
    //       author: 'dafgdfsg',
    //       comment: 'gfdgsdfg'
    //     },
    //     {
    //       title: 'harry poter',
    //       author: 'dafgdfsg',
    //       comment: 'gfdgsdfg'
    //     },]
    //   },
    //   {
    //     id: 2,
    //     title: "Some title",
    //     category: 'Some category',
    //     comment:" it's all good",
    //     myBooks:[]
    //   },
    //   {
    //     id: 3,
    //     title: "Some title",
    //     category: 'Some category',
    //     comment:" it's all good",
    //     myBooks:[]
    //   },
];

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addList(state, action) {
            state.push(action.payload)
            
        }
  }})
  
  
  export const { addList } = bookSlice.actions
  
  export default bookSlice.reducer