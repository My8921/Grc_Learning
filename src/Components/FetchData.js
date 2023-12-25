import { useCallback, useEffect } from "react";
export const FetchProducts = ({setdata, link}) => {
    const fetchdata = useCallback(async () => {
        try {
            let response = await fetch(" http://localhost:4000/products");
            console.log('yes i called');
            if (!response.ok) {
                throw new Error('Error Occured');
            }
            let new_data = await response.json();
            setdata(new_data);
        }
        catch (err) {
        }
    }, [setdata, link])
    useEffect(() => {
        fetchdata();
    }, [fetchdata])
}