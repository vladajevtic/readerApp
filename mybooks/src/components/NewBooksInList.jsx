import React, { useState } from 'react'
import { Paper } from '@mui/material';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const booksItem= {
    title: '',
    author: '',
    comment: ''
}

export default function BooksInList(props) {
    const [myBooks, setMyBooks] = useState(booksItem);
    const handleInputChange = e =>{
        const {name, value} = e.target;
        setMyBooks({
            ...myBooks,
            [name]:value
        }
        )
    }
        
    const onSave = () =>{
        props.addToList(myBooks);
        setMyBooks(booksItem);
    }

  return (
        <Paper elevation={3}>
          <Grid container >
              <Grid item>
                <TextField 
                name='title'
                variant='outlined'
                label="title"
                value={myBooks.title}
                onChange={handleInputChange}
                />
              </Grid>
              <Grid item >
                <TextField 
                    name='author'
                    variant='outlined'
                    label="Author"
                    value={myBooks.author}
                    onChange={handleInputChange}
                    />
              </Grid>
              <Grid item >
                <TextField 
                    name='comment'
                    variant='outlined'
                    label="Add comment"
                    value={myBooks.comment}
                    onChange={handleInputChange}
                    />
              </Grid>
              <Grid item sx={{width: '100%', justifyContent: 'flex-end' }}>
                <Button variant="outlined" color='success' onClick={onSave} startIcon={<AddCircleOutlineOutlinedIcon />} >Add a book</Button>
              </Grid>
          </Grid>
        </Paper>
  )
}
