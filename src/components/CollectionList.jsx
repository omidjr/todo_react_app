const CollectionList = ({setNewCollection, collections, setCollections}) => {

    const collectionsArr = collections.map((c) => { return c.content });
    const isDuplicate = collectionsArr.some((c, idx) => { 
            return collectionsArr.indexOf(c) !== idx
        });

        
        if(isDuplicate){
            const newCollections = [...collections];
            const uniqueCollections = [...newCollections.reduce((map, obj) => map.set(obj.content, obj), new Map()).values()];
            setCollections(uniqueCollections);
            setNewCollection('');
        }

    return (
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
    )
}

export default CollectionList
