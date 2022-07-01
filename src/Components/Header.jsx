import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "./Header.css";

export default function Header() {
    return (
        <>
            <div className='head'>
                <div className='headLeft'>TheFoodList</div>
                

                <div className='headRight'><input type="search" placeholder="search" /><SearchSharpIcon /> <MenuSharpIcon /> </div>
            </div>
        </>
    )
}
