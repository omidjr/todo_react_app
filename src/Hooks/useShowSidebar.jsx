import { useState } from 'react';

export const useShowSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return {
        showSidebar,
        setShowSidebar
    }
}
