import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import SearchInput from './SearchInput';

const URL = 'http://openlibrary.org/search.json?q=';

export default function SearchBook() {
    const [books, setBooks] = useState(null);
    const [searchKey, setSearchKey] = useState("");
    
    useEffect( () =>{
        const getData = async () =>{
            await axios.get(URL + searchKey)
            .then(res =>{
                const booksData = res.data
                setBooks(booksData.docs)
            })
        }
        getData()
        .catch(console.error)
    },[searchKey])

    const searchHandler = (search) =>{
        setSearchKey(search);
    }
    
  return (
    <>
        <SearchInput inputValue={searchKey} searchWord={searchHandler}></SearchInput>
        <Grid container spacing={2} p={1}>
            {books && books.map( book =>(
                <Grid item key={book.key}>              
                    <Card >
                        <CardMedia
                            component="img"
                            height="140"
                            image={'https://covers.openlibrary.org/b/id/' + book.cover_i + '.jpg'}
                            alt="cover"
                        />
                        <CardContent sx={{  display: 'flex',flexDirection: 'column', height: 100, alignItems: 'center' }}>
                            <Typography  gutterBottom>
                                {book.title.substring(0,20)}
                            </Typography>
                            <Typography  color="text.secondary">
                            {book.author_name? book.author_name[0].substring(0,20) : "unnamed"}
                            </Typography>                       
                        </CardContent>
                        <CardActions sx={{mt: 2}} >
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>           
                </Grid>
            ))}
        </Grid>
    </>
  )
}
