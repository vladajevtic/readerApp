import React from 'react'
import { useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function MyLists() {
  // const books = useSelector(state => state.books)
  const storage = JSON.parse(localStorage.getItem('list')) || [];
  const renderList = storage.map((book,index) =>(  
      <Grid item xs={2} key={index}>
        <Paper>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h5" component="div">
              {book.category}
              </Typography>
              {book.myBooks.map((books, index) =>(
                <Paper sx={{margin: 1}} key={index}>
                  <Typography>{books.title}</Typography>
                  <Typography>{books.author}</Typography>
                  <Typography>{books.comment}</Typography>
                </Paper>
              ))}
              <Typography variant="body2">
              {book.comment}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    
  ))

  return (
    <Grid container spacing={2}>{renderList}</Grid>
  )
}
