import { useState, useEffect } from 'react';
import axios from 'axios';
// 19c82799eeceafe9f814951b577bfc5ea868a550a486ce811693dd0ffba4d053c3279bac9


//hash : fafa17edf0942ba98e08bed985b2ae1d

export const useFetch = () => {
    const [state, setState] = useState([]);
    useEffect(async () => {
        const response = await axios('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=486ce811693dd0ffba4d053c3279bac9&hash=fafa17edf0942ba98e08bed985b2ae1d');
    setState(response.data.data);
    },[])
   
    return {
        state
    };
}