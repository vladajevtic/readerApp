import React from 'react'
import { Box, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function SearchInput({ inputValue, searchWord }) {

  const handleChange=(e)=>{
    e.preventDefault()
    searchWord(e.target.value)
  }

  return (
    <Box sx={{display: 'flex', alignItems: 'flex-end', mx: "auto" }}>
      <SearchOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField 
      id="input-with-sx" 
      label="Search a book" 
      value={inputValue}
      variant="standard" 
      onChange={handleChange}/>
    </Box>
  )
}
