import { useEffect, useState } from "react"

export const useFetch = (url) => {
    // props

    // states
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    // funciones propias de react
    useEffect(() => {
        if(url){
            console.log({url})
            getFetch(url);
        }
    }, [url]);


    // funciones especificas del proyecto
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null
        })

    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
