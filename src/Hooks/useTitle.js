import { useEffect } from "react";
const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title}-Perfect Engineering`;
    } ,[title])
};

export default useTitle;

