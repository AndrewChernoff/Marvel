import React, { useEffect, useRef, useState } from "react";
import '../Characters/Characters.scss';
import MarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import Loading from "../Common/Loading/Loading";
import Error from "../Common/Error/Error";

const Characters = (props) => {
    let [characters, setCharacters] = useState([]);
    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [offset, setOffset] = useState(509);
    let [newCharsPortion, setNewCharsPortion] = useState(false);

    useEffect(() => {
        getCharacters();
    }, []);

    const getCharacters = () => {
        setLoading(true);
        new MarvelAPI().getAllCharcters()
            .then(res => {
                setCharacters(characters => [...characters, ...res.data.results]);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
                setError(true);
            })
    }

    const onLoadMoreBtn = () => {
        setNewCharsPortion(true);
        setOffset(offset + 9);

        new MarvelAPI().getAllCharcters(offset)
            .then(res => {
                setLoading(false);
                setCharacters(characters => [...characters, ...res.data.results])
                setNewCharsPortion(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            })
    }

    let refItems = useRef([]);

    let onFocus = (id) => {
        refItems.current.forEach(item => item.classList.remove('characters__item__active'));
        refItems.current.forEach(item => item.classList.add('characters__item'));
        refItems.current[id].classList.add('characters__item__active');
        refItems.current[id].focus();
    }

    let handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(event.currentTarget);
            onFocus(event.currentTarget.dataset.number);
        }
    }

    const charactersArr = characters.map((item, i) => {

        return <div tabIndex={0} data-number={i}
            ref={(element) => refItems.current[i] = element}
            onClick={() => {
                props.getSelectedItem(item.id);
                onFocus(i);
            }}
            onKeyPress={(e) => {
                handleKeyPress(e)
                props.getSelectedItem(item.id);
            }}

            className={`${props.selectedId === item.id ? 'characters__item__active' : 'characters__item'}`} key={item.id}>
            <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.name} />
            <div className='characters__item__name'>{item.name}</div>
        </div>
    })
    return (<>
        {loading ? <Loading /> : null}
        {error ? <Error /> : null}
        {!loading && !error ? <ViewCharacters characters={charactersArr}
            newCharsPortion={newCharsPortion}
            onLoadMoreBtn={onLoadMoreBtn}
            offset={offset}
        /> : null}
    </>
    )
}

const ViewCharacters = ({ characters, onLoadMoreBtn, newCharsPortion, offset }) => {
    return (
        <div className='characters' >
            <div className='characters__items'>
                {characters}
            </div>
            <button
                style={{ display: `${offset > 1553 ? 'none' : 'block'}` }}
                disabled={newCharsPortion} onClick={onLoadMoreBtn}>LOAD MORE</button>
        </div>
    )
}

export default Characters;