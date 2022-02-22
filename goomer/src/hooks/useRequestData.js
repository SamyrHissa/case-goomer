import { useEffect, useState } from "react";
import axios from 'axios';

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
            .then((res) => {
                setIsLoading(false);
                setData(res.data)
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err)
            })
    }, [url])
    return [data, isLoading, error]
}