import React, { useState,useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { selectProdAr, getDataAsync,addProductAsync,delProdAsync,updProdAsync,selectupdFlag } from './productSlice'

const DisplayProducts = () => {
    const products = useAppSelector(selectProdAr);
    const upd = useAppSelector(selectupdFlag);
    const dispatch = useAppDispatch();
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    useEffect(() => {
        dispatch(getDataAsync())
    }, [upd])
    
    return (
        <div>
            <button onClick={()=>dispatch(getDataAsync())}>Get products</button>
            desc<input onChange={(e)=>setdesc(e.target.value)}></input>
            price<input  onChange={(e)=>setprice(+e.target.value)}></input>
            <button onClick={()=>dispatch(addProductAsync({desc,price}))}>add product</button>
            DisplayProducts
            <h1>
                {products.length}
                {products.map((prod,i)=><div>
                    <h2>{prod.price}, 
                    {prod.desc},
                    <button onClick={()=>dispatch(delProdAsync(+prod.id))}>del</button>
                    <button onClick={()=>dispatch(updProdAsync({id:prod.id,desc,price}))}>upd</button>
                    </h2>
                </div>)}
            </h1>
        </div>
    )
}

export default DisplayProducts