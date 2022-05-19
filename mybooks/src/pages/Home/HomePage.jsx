import React, { useState } from 'react'
import style from './HomePage.module.css';
import NewListBook from '../../components/NewListBook';
import SearchBook from '../../components/SearchBook';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export default function HomePage() {
  const [ listForm, setListForm ] = useState(true);
  const handleClick = (e) =>{
    e.preventDefault()
    setListForm(false)
  };
  const closeForm = () =>{
    setListForm(true)
  };
  return (
    <div className={style.container}>
        <div className={style.search}>
          <SearchBook></SearchBook>
        </div>
        <div className={style.addList}>
          {listForm ? <Button variant="contained"  color="success" size="large" 
          startIcon={<AddCircleOutlineOutlinedIcon />} 
          onClick = {handleClick}> Make a list</Button> 
          : <NewListBook closeForm={closeForm}></NewListBook>}
        </div>
    </div>
  )
}
