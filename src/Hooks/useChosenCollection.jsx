import { useState } from "react";

export const useChosenCollection = () => {
    const [chosenCollection, setChosenCollection] = useState('');

    return {
        chosenCollection,
        setChosenCollection
    }
}
