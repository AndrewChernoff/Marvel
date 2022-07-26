import '../ComicsItem/ComicsItem.scss';
import { useEffect, useState } from "react";
import useMarvelAPI from "../../../DAL/MarvelAPI/MarvelAPI";
import { NavLink, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { ComicsHeader } from '../Comics';
import AnimatePage from '../../Common/AnimatePage/AnimatePage';

const ComicsItem = () => {
    const params = useParams();
    const { getComicsItem } = useMarvelAPI();
    const [item, setItem] = useState({});

    useEffect(() => {
        if (params.id) {
            getComicsItem(params.id)
                .then(res => {
                    setItem(res);
                })
        }
    }, []);

    return <AnimatePage>
        <div className='comicsItem'>
            <div className='container'>
                <ComicsHeader />

                <div className='comicsItem__content'>
                    <img className='comicsItem__content_img' src={item.thumbnail} alt={item.title} />

                    <div className='comicsItem__content_info'>
                        <h2 className='comicsItem__content_info_name'>{item.title}</h2>
                        {item.description ?
                            parse(`<div className='comicsItem__content_info_descr'>${item.description}</div>`)
                            : 'No info for this comic'
                        }
                        {item.pageCount ?
                            <div className='comicsItem__content_info_pageCount'>{item.pageCount} pages</div>
                            : null
                        }
                        {item.language ?
                            <div className='comicsItem__content_info_language'>Language: {item.language}</div>
                            : null
                        }
                        {item.price ?
                            <div className='comicsItem__content_info_price'>{item.price}$</div>
                            : null
                        }

                    </div>

                    <NavLink to='/comics'>Back to all</NavLink>
                </div>
            </div>
        </div>
    </AnimatePage>
}

export default ComicsItem;