import { createContext, useState } from "react";

export const useInitialState = ()=>{
    const [show, setShow] = useState(false);
    const [tv, setTv] = useState(false);

    return {
        show, setShow,tv,setTv
    }
}

export const AppContext = createContext({});