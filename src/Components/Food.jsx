import React, { useEffect, useState } from 'react'
import axios from "axios";
import Icon from "../Images/icon.png"
import { useNavigate } from "react-router-dom"
import "./Food.css";

export default function Food() {

    const [food, setFood] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/data").then((res) => {
            console.log(res.data)
            setFood(res.data)

        })
    }, []);

    return (
        <>
            <div className='lists'>
                <div className='left'>Food List</div>
                <div className='right'>Favourites</div>
            </div>
            <div className='main'>{food.map((el) =>
                <div className='cont' onClick={() => navigate(`/${el.code}`)} key={el.code}>
                    <div>
                        <img src={Icon} alt="icon" />
                    </div>&nbsp;&nbsp;&nbsp;
                    <div className='flex'>
                        <p className='productName'><b>{el.product_name}</b> ({el.generic_name})</p>
                        <hr />
                    </div>
                </div>
            )}

            </div>
           
        </>
    )
}
