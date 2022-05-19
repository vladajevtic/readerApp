import React, { useState, useEffect } from 'react'
import { Grid, Paper, TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import BooksInList from './NewBooksInList'
import {Typography} from '@mui/material';
import { addList } from '../features/MyBooksList'

const newList = {
    title: '',
    category: '',
    myBooks: []
}

export default function NewListBook(props) {
  const [values,setValues] = useState(newList);
  const [arr,setArr] = useState(JSON.parse(localStorage.getItem('list') || '[]'))
  const dispatch = useDispatch()
  const storage = () =>{
    const forStorage = [...arr, values];
    setArr(forStorage);
    localStorage.setItem('list', JSON.stringify(forStorage));
  }
  const handleInputChange = e =>{
      const {name, value} = e.target;
      setValues({
          ...values,
          id:nanoid(),          
          [name]:value,
      })
  }
  const addToList = (list) =>{
    setValues({...values,
      myBooks:[...values.myBooks,list]})
  }
  const addToSlice = () =>{
    dispatch(
      addList(values)
    )
    storage();
    setValues(newList);
    props.closeForm();
  }

  return (
          <Grid container direction="column" spacing={1} sx ={{padding: 2}}>           
              <Grid item>
                <TextField                
                name='title'
                variant='outlined'
                label=" List Title"
                value={values.title}
                onChange={handleInputChange}
                />
              </Grid>
              <Grid item >
              <TextField               
                name='category'
                variant='outlined'
                label="List Category"
                value={values.category}
                onChange={handleInputChange}
                />
              </Grid>             
              <Paper elevation={3} p={1}>
                <Grid container spacing={1} direction="row">
                  {values.myBooks.length === 0 ? <Grid item ><Typography>List of Books</Typography></Grid>  :  values.myBooks.map( (book,index) =>(<Grid item key={index}><Typography>'{book.title}'</Typography></Grid>))  }
                  <Grid item >
                    <BooksInList addToList= {addToList} />
                  </Grid>              
                </Grid> 
              </Paper>
              <Grid item >
                <Button variant="outlined" onClick={addToSlice}>Make a list</Button>
              </Grid>
          </Grid>      
  )
}
