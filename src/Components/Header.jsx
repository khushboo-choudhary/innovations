import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate =useNavigate()
    return (
        <>
            <div className='head'>
            <div className='headLeft' onClick={()=>navigate("/")}>TheFoodList</div>
            <div className='headRight'><span><SearchSharpIcon /></span> <span><MenuSharpIcon /></span> </div>
            </div>
        </>
    )
}
