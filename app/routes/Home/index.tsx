import { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners"
import type { Route } from "./+types";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Chuks Kitchen - Home" },
    { name: "description", content: "Welcome to your dashboard" },
  ];
}

const HomePage = () => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
       
    },[])
    return ( <>
    hdjtjdt
    </>);
}
 
export default HomePage;