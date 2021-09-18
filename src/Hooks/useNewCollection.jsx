import { useState } from "react";

export const useNewCollection = () => {
    const [newCollection, setNewCollection] = useState('');

    return {
        newCollection,
        setNewCollection
    }
}