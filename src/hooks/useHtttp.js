import { useCallback, useState } from "react";

const useHtttp = () => {
   
    const [process, setProcess] = useState('waiting');

    const request = useCallback(async (url, method = 'GET', headers = { 'Content-Type': 'application/json' }, body = null) => {
        //setLoading(true);

        try {
            const response = await fetch(url, { method, headers, body });
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.log(error.message)
            throw error;
        }

    }, []);
    const clearError = useCallback(() =>{
        setProcess('error');
    }, [])

    return {  request, clearError, process, setProcess };

}


export default useHtttp;