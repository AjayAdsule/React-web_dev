import {useCallback, useEffect,useState} from "react"

export const fetchData=(url)=>{
    const [isLoading,setIsLoading]= useState(false);
    const [product,setProduct]=useState([]);

    const getProduct=useCallback(async()=>{
        const response=await fetch(url);
        const product=await response.json();
        setProduct(product);
        setIsLoading(false);

    },[url])

    useEffect(()=>{
        getProduct();
    },[url,getProduct])
    return {isLoading,product}
}