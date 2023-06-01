import React from 'react'
import { TextField } from '@mui/material'
import {useDispatch} from 'react-redux';
import { searchMovies } from '../redux/search';
import  Downshift from 'downshift';
const Suggestion = () => {
   const dispatch =  useDispatch();

   const inputOnChange = (event) => {
    if(!event.target.value){
        return;
    }
    dispatch(searchMovies(event.target.value))
   }
  return (

  <Downshift>
    {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
    }) => (
        <TextField
        id="search"
        placeholder='Search'
        fullWidth={true}
        sx={{mb: 5}}
        variant="standard"
        InputProps={{
            ...getInputProps({
                onChange: inputOnChange
            })
            
        }}
  />
    )}
  
  </Downshift>
 
  )
}

export default Suggestion
