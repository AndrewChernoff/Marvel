import React from 'react';
import MarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';
import thorIMG from '../../resourses/img/thor.png';
import tools from '../../resourses/img/tools.png'
import './RandomChar.scss';

class RandomCharacter extends React.Component {
    constructor() {
        super();
        this.getRandomChar();

        this.state = {}
    }

    getRandomChar = () => {
        const randomID = Math.floor(Math.random() * (1010709 - 1009334 + 1)) + 1009334;
        new MarvelAPI().getCharacter(randomID)
            .then(res => {
                console.log(res)
                this.setState(res);
                console.log(this.state)
            })
    }

    render() {
        let { name, description, thumbnail, wiki } = this.state;

        if (description === '') {
            description = 'No information for this character. Please, click the "WIKI" button to get information';
        } else {
            description = this.state.description
        }

        return (
            <div className='random__character'>
                <div className='container'>
                    <div className='container__content'>
                        <div className='random__character__content'>
                            <div className='random__character__content__info'>
                                <img src={thumbnail} alt='Random Character' />
                            </div>
                            <div className='random__character__content__descr'>
                                <h2>{name}</h2>
                                <p>{description}</p>

                                <div className='random__character__content__descr__btns'>
                                    <a href='#' style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '101px',
                                        height: '38px',
                                        color: 'white',
                                        background: '#9F0013',
                                        border: 'none',
                                        clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                    }}>HOMEPAGE</a>

                                    <a href={wiki} style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '101px',
                                        height: '38px',
                                        color: 'white',
                                        background: '#5C5C5C',
                                        border: 'none',
                                        clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                    }}>WIKI
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='random__info'>
                            <div className='random__info__content'>
                                <p> Random character for today!
                                    <br></br>
                                    Do you want to get to know him better?</p>
                                <p>Or choose another one</p>
                                <a href='#' style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '101px',
                                    height: '38px',
                                    color: 'white',
                                    background: '#9F0013',
                                    border: 'none',
                                    clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                }}>TRY IT
                                </a>
                                <img className='random__info__content__img' src={tools} alt='tool' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomCharacter;