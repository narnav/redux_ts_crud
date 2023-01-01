import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectUname,cngName,cngNameAge,getDataAsync,getDataServerAsync,selectProdAr} from './demoSlice';

export function Demo() {
  const studentName = useAppSelector(selectUname);
  const products = useAppSelector(selectProdAr);

  const dispatch = useAppDispatch();
    const [newUserName, setnewUserName] = useState("")
    const [age, setage] = useState(1)
  return (
    <div>
        <h1> {studentName}</h1>
        <br></br>
        <input onChange={(e)=>setnewUserName(e.target.value)}/>
        <input onChange={(e)=>setage(+e.target.value)}/>
        <button onClick={()=>dispatch(cngName(newUserName))}>cng nnnnname</button>
        <button onClick={()=>dispatch(cngNameAge({newUserName,age}))}>cng name and age</button>
        <button onClick={()=>dispatch(getDataAsync(age))}>demo asyn</button>
        <button onClick={()=>dispatch(getDataServerAsync())}>test server </button>
        Products {products.length}
        
        {products.map(p=><div>{p.desc}{p.price}</div>)}
    </div>
  );
}
