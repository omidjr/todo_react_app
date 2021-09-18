import { useState } from "react";

export const useCollections = () => {
    const [collections, setCollections] = useState([]);

    return {
        collections,
        setCollections
    }
}