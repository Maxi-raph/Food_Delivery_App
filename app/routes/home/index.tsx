import { useEffect, useState } from "react";
import pkg from "react-spinners"
import type { Route } from "./+types";

const { FadeLoader } = pkg

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
     omooo
    </>);
}
 
export default HomePage;