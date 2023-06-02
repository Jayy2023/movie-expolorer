import React from 'react'
import { TextField, Paper } from '@mui/material'
import {useDispatch} from 'react-redux';
import { searchMovies } from '../redux/search';
import  Downshift from 'downshift';



const Suggestion = ({movies}) => {
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
        <>
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
            {
               isOpen ?  (
               <Paper square={true} {...getMenuProps()}>
                {
                    movies.results
                    .slice(0, 10)
                    .filter((item)  => (
                        !inputValue ||
                        item.title 
                        .loweCase()
                        .includes(inputValue.toLowerCase()))
                    )
                }
               </Paper>)
                : null
            }
        </>
  
    )}
  
  </Downshift>
 
  )
}

export default Suggestion
