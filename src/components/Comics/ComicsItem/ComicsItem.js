import { useEffect, useState } from "react";
import useMarvelAPI from "../../../DAL/MarvelAPI/MarvelAPI";
import { useParams } from 'react-router-dom';

const ComicsItem = () => {
    const params = useParams();

    const { getComicsItem } = useMarvelAPI();
    //const [itemId, setItemId] = useState(params.id);
    const [item, setItem] = useState({});

    useEffect(() => {
        if (params.id) {
            getComicsItem(params.id)
                .then(res => {
                    setItem(res);
                })
        }
    }, []);


    return (<div>
        <div className='container'>
            <img src={item.thumbnail} alt={item.title} />
            <div>{item.title}</div>
            <div>{item.price}</div>
        </div>
    </div>
    )
}

export default ComicsItem;