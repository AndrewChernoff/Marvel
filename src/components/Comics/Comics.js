import '../Comics/Comics.scss';
import avengersLogo from '../../resourses/logo/avengers_logo.png';
import avengers from '../../resourses/img/avengers.png';
import { useEffect, useState } from 'react';
import useMarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import { NavLink } from 'react-router-dom';

const Comics = () => {
    let [comicsItems, setComicsItems] = useState([]);
    let [offset, setOffset] = useState(10008);
    let [newPortion, setNewPortion] = useState(false);
    let { getAllComics, error, loading } = useMarvelAPI();

    useEffect(() => {
        getAllComics()
            .then(res => {
                setComicsItems(comicsItems => [...comicsItems, ...res.data.results])
            });
    }, []);

    const onLoadMoreClick = () => {
        setNewPortion(true);
        setOffset(offset + 8);
        getAllComics(offset)
            .then(res => {
                console.log(res.data.results)
                setComicsItems(comicsItems => [...comicsItems, ...res.data.results])
                setNewPortion(false);
            });
    }

    const comicsList = comicsItems.map((item, i) => {
        const path = `/comics/${item.id}`;
        return <NavLink to={path} className='comics__item' key={i}>
            <img className='comics__item_img' src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.title} />
            <div className='comics__item_title'>
                {item.title}
            </div>
            <div className='comics__item_price'>
                {item.prices[0].price}$
            </div>
        </NavLink>
    })


    return <div className='comics'>
        <div className='container'>
            <div className='comics__header'>
                <img className='comics__header_avengers' src={avengers} alt='avengers' />
                <div className='comics__header_title'>
                    New comics every week!
                    <br></br>
                    Stay tuned!
                </div>
                <img className='comics__header_avengers-logo' src={avengersLogo} alt='avengers logo' />
            </div>

            <div className='comics__items'>
                {loading && !newPortion ? <Loading /> : null}
                {error ? <Error /> : null}
                {comicsList}
            </div>

            <button style={{ display: `${comicsItems.length < 8 ? 'none' : 'block'}` }} disabled={newPortion} onClick={onLoadMoreClick}>LOAD MORE</button>
        </div>


    </div>
}

export default Comics;