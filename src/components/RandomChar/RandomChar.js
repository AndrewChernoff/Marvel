import React, { useState, useEffect } from 'react';
import tools from '../../resourses/img/tools.png';
import componentContent from '../../utils/utils';
import './RandomChar.scss';
import WikiButton from '../Common/WikiButton/WikiButton';
import HomePageBtn from '../Common/HomePageBtn/HomePageBtn';
import useMarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';

const RandomCharacter = () => {
    let [character, setCharacter] = useState({});
    let { getCharacter, clearError, process, setProcess} = useMarvelAPI();

    useEffect(() => {
        getRandomChar();
    }, []);

    const getRandomChar = () => {
        clearError();
        setProcess('waiting');
        const randomID = Math.floor(Math.random() * (1011400 - 1011000 + 1)) + 1011000;
        getCharacter(randomID)
            .then(character => {
                setCharacter(character);
            })
            .then(() => setProcess('loaded'))
    }

    return (
        <div className='random__character'>
            <div className='container'>
                <div className='container__content'>
                    <div className='random__character__content'>
                        {componentContent(process, <View character={character} />)}
                    </div>
                    <div className='random__info'>
                        <div className='random__info__content'>
                            <p> Random character for today!
                                <br></br>
                                Do you want to get to know him better?</p>
                            <p>Or choose another one</p>
                            <a onClick={getRandomChar} href='#' style={{
                                background: '#9F0013',
                            }}>TRY IT</a>
                            <img className='random__info__content__img' src={tools} alt='tool' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const View = ({ character }) => {

    let { name, description, thumbnail, wiki } = character;
    try {
        if (description.length > 200) {
            let sliced = description.slice(0, 100) + '...';
            description = sliced;
        } else if (description === '') {
            description = 'No information about this character. Please, click the "WIKI" button to get information';
        }
    } catch (e) { }

    return <>
        <div className='random__character__content__info'>
            <img src={thumbnail} alt='Random Character' />
        </div>
        <div className='random__character__content__descr'>
            <h2>{name}</h2>
            <p>{description}</p>

            <div className='random__character__content__descr__btns'>
                <HomePageBtn />
                <WikiButton wiki={wiki} />
            </div>
        </div>
    </>
}

export default RandomCharacter;