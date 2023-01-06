
import Userdata from './userData';
import "./index.css";
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPeopleDetails } from '../actions/peopleAction';
function Index() {


    const peopleData = useSelector((state) => state.people.data);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPeopleDetails());
    }, [dispatch]);
  

   

  return (
    <>
   <Userdata people={peopleData}/>

    </>
  )
}

export default Index;