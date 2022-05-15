import React from 'react';
import thorIMG from '../../resourses/img/thor.png';
import tools from '../../resourses/img/tools.png'
import '../Thor/Thor.scss';

class RandomCharacter extends React.Component {
    render() {
        return (
            <div className='random__character'>
                <div className='container'>
                    <div className='container__content'>
                        <div className='random__character__content'>
                            <div className='random__character__content__info'>
                                <img src={thorIMG} alt='Thor' />
                            </div>
                            <div className='random__character__content__descr'>
                                <h2>THOR</h2>
                                <p>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.
                                    While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>

                                <div className='random__character__content__descr__btns'>
                                    <button style={{
                                        width: '101px',
                                        height: '38px',
                                        color: 'white',
                                        background: '#9F0013',
                                        border: 'none',
                                        clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                    }}>HOMEPAGE</button>

                                    <button style={{
                                        width: '101px',
                                        height: '38px',
                                        color: 'white',
                                        background: '#5C5C5C',
                                        border: 'none',
                                        clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                    }}>WIKI</button>
                                </div>
                            </div>
                        </div>
                        <div className='random__info'>
                            <div className='random__info__content'>
                                <p> Random character for today!
                                    <br></br>
                                    Do you want to get to know him better?</p>
                                <p>Or choose another one</p>
                                <button style={{
                                    width: '101px',
                                    height: '38px',
                                    color: 'white',
                                    background: '#9F0013',
                                    border: 'none',
                                    clipPath: 'polygon(20% -2%, 125% 0px, 80% 100%, -20% 100%)'
                                }}>TRY IT</button>
                                <img className='random__info__content__img' src={tools} alt='tools' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomCharacter;