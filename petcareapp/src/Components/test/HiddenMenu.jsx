import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { apiClient } from "../apiClient/Axios";



export default function HiddenMenu(){
  const [list,setList]= useState([])

  useEffect(() => {
    retrieveData()  
  },[])

  const retrieveData = async () => {
    try{

      const response= await apiClient.get('users/duy/orederedProducts')
      setList(response.data)
    }  
    catch(error){
      console.log('error khi get data')
    }
  }

  return(
    <SearchBar data={list} />
  )
}