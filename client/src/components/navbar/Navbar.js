import React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{ padding: 20, backgroundColor:'#FDF5E6', opacity:0.4}}>
      <div style={{display:'flex'}}>
        <div style={{marginRight:'auto', padding:'10px 20px'}}>Logo</div>
        <div style={{marginTop:10}}>
            <Link to='/cart' style={{padding:'10px 20px',}}>Cart</Link>
            <Link to='/account' style={{padding:'10px 20px'}}>Account</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <form>
<TextField
  id="search-bar"
  className="text"
  onInput={(e) => {
    // setSearchQuery(e.target.value);
  }}
  label="Enter a city name"
  variant="outlined"
  placeholder="Search..."
  size="small"
/>
<IconButton type="submit" aria-label="search">
  <SearchIcon style={{ fill: "blue" }} />
  </IconButton>
</form> */
}
