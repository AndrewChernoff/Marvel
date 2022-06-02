import { useCallback, useState } from "react";

const useHtttp = () => {
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(false);

    const request = useCallback(async (url, method = 'GET', headers = { 'Content-Type': 'application/json' }, body = null) => {
        setLoading(true);

        try {
            const response = await fetch(url, { method, headers, body });
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            setLoading(false);

            return await response.json();
        } catch (error) {
            setError(true);
            setError(error.message);
            console.log(error.message)
            throw error;
        }

    }, []);
    const clearError = useCallback(() => setError(false), [])

    return { error, loading, request, clearError };

}


export default useHtttp;