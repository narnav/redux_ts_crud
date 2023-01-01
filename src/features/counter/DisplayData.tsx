import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {selectUname,selectUage} from '../counter/demoSlice'
const DisplayData = () => {
    const studentName = useAppSelector(selectUname);
    const studentAge = useAppSelector(selectUage);
  return (
    <div>
        i'm just display
        <h1>
        Name:{studentName}<br></br>
        Age:{studentAge}
        </h1>


    </div>
  )
}

export default DisplayData