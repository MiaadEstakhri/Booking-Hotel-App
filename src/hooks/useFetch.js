import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useFetch({ url = "", query = "" }) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`${url}?${query}`);
                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [url, query]);
    return { data, isLoading };
}