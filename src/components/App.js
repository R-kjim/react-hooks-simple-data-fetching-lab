import { useEffect, useState } from "react"

// create your App component here
export default function App(){
    const [datas,setData]=useState([])
    useEffect(()=>{
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>console.log(error))
    },[])
    if(datas.length===0){
        return <p>Loading...</p>
    }else {
        return <img src={datas.message} alt='A Random Dog'/>
    }
  

}