import '../Comics/Comics.scss';
import avengersLogo from '../../resourses/logo/avengers_logo.png';
import avengers from '../../resourses/img/avengers.png';
import { useEffect, useRef, useState } from 'react';
import useMarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';
import Loading from '../Common/Loading/Loading';
import Error from '../Common/Error/Error';
import { NavLink } from 'react-router-dom';
import AnimatePage from '../Common/AnimatePage/AnimatePage';

const Comics = () => {
    const [comicsItems, setComicsItems] = useState([]);
    const [offset, setOffset] = useState(10008);
    const [newPortion, setNewPortion] = useState(false);
    const { getAllComics, error, loading, getCharacterByName } = useMarvelAPI();
    const comicsRef = useRef([]);

    useEffect(() => {
        getAllComics()
            .then(res => {
                setComicsItems(comicsItems => [...comicsItems, ...res.data.results]);
            });
        //getCharacterByName('Hammerhead').then(res => console.log(res))
    }, []);

    const onLoadMoreClick = () => {
        setNewPortion(true);
        setOffset(offset + 8);
        getAllComics(offset)
            .then(res => {
                setComicsItems(comicsItems => [...comicsItems, ...res.data.results])
                setNewPortion(false);
            });
    }

    const onEnterItem = (i) => {
        comicsRef.current.forEach(el => el.classList.remove('comics__item__active'));
        comicsRef.current[i].classList.add('comics__item__active');
        comicsRef.current[i].focus();
    }

    const onLeaveItem = (i) => {

        comicsRef.current[i].blur();
        comicsRef.current[i].classList.add('comics__item__active');
        comicsRef.current.forEach(el => el.classList.remove('comics__item__active'));

    }

    const comicsList = comicsItems.map((item, i) => {
        const path = `/comics/${item.id}`;

        return <NavLink to={path} ref={(element) => comicsRef.current.push(element)} onMouseEnter={() => onEnterItem(i)}
            onMouseLeave={() => onLeaveItem(i)} className='comics__item' key={i}>
            <img className='comics__item_img' src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.title} />
            <div className='comics__item_title'>
                {item.title}
            </div>
            <div className='comics__item_price'>
                {item.prices[0].price}$
            </div>
        </NavLink>
    })


    return <AnimatePage>
        <div className='comics'>
            <div className='container'>
                <ComicsHeader />
                <div className='comics__items'>
                    {loading && !newPortion ? <Loading /> : null}
                    {error ? <Error /> : null}
                    {comicsList}
                </div>

                <button style={{ display: `${comicsItems.length < 8 ? 'none' : 'block'}` }} disabled={newPortion} onClick={onLoadMoreClick}>LOAD MORE</button>
            </div>
        </div>
    </AnimatePage>
}

export const ComicsHeader = () => {
    return <div className='comics__header'>
        <img className='comics__header_avengers' src={avengers} alt='avengers' />
        <div className='comics__header_title'>
            New comics every week!
            <br></br>
            Stay tuned!
        </div>
        <img className='comics__header_avengers-logo' src={avengersLogo} alt='avengers logo' />
    </div>
}

export default Comics;