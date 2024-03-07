import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function useFetch(url, query = "") {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`${url}?${query}`);
                setData(data);
            } catch (error) {
                setData([]);
                toast.error(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url, query]);

    return { data, isLoading };
}