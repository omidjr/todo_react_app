import "./Sidebar.css";
import React, { useCallback } from 'react'
import CollectionList from "./CollectionList";

const Sidebar = ({showSidebar, newCollection, setNewCollection, collections, setCollections}) => {
    const formSubmitted = useCallback((e) => {
        e.preventDefault();
        if (!newCollection.trim()) return; //Avoid empty collections

        setCollections([
            {
                id: collections.length ? collections[0].id + 1 : 1,
                content: newCollection.toLowerCase(),
            },
                ...collections
        ]);
        setNewCollection('');
        }, [newCollection, collections]);

    const onNewCollectionChange = useCallback((e) => {
        setNewCollection(e.target.value);
    }, []);

    return (
        <div className={showSidebar ? ['sideBar', 'active'].join(' ') : "sideBar"}>
            <p>
                Collections
            </p>
            <CollectionList collections={collections} setCollections={setCollections} setNewCollection={setNewCollection} />
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
