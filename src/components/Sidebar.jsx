import "./Sidebar.css";
import React, { useCallback } from 'react'

const Sidebar = ({showSidebar, newCollection, setNewCollection, collections, setCollections}) => {
    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newCollection.trim()) return; //Avoid empty todos
        setCollections([
            {
                id: collections.length ? collections[0].id + 1 : 1,
                content: newCollection,
            },
            ...collections
        ]);
        setNewCollection('');
    }, [newCollection, collections])

    const onNewCollectionChange = useCallback((e) => {
        setNewCollection(e.target.value);
    }, []);

    return (
        <div className={showSidebar ? ['sideBar', 'active'].join(' ') : "sideBar"}>
            <p>
                Collections
            </p>
            <ul>
                {collections.map((collection) => (
                    <li className="collection" key={collection.id}>
                        <span >
                            <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4 1L4.25 8.2L1 4.92727" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        {collection.content}
                    </li>
                ))
                }
            </ul>
            <form className="addCollection_form" onSubmit={formSubmitted}>
                <input
                    className="addCollection_input"
                    autoComplete="off"
                    placeholder="Add a Collection..."
                    id="newCollection"
                    name="newCollection"
                    value={newCollection}
                    onChange={onNewCollectionChange}
                />
                <button className="addCollection_btn">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.87097 1.19354V13.0645" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1.93548 7.12903H13.8064" stroke="#EEEEEE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </form>
        </div>
    )
}

export default Sidebar
