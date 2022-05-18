import React from 'react';
import MarvelAPI from '../../DAL/MarvelAPI/MarvelAPI';

import tools from '../../resourses/img/tools.png'
import Error from '../Common/Error/Error';
import Loading from '../Common/Loading/Loading';
import './RandomChar.scss';

class RandomCharacter extends React.Component {
    constructor() {
        super();
        this.getRandomChar();

        this.state = {
            character: null,
            loading: true,
            error: false
        }
    }

    getRandomChar = () => {
        const randomID = Math.floor(Math.random() * (1011400 - 1011000 + 1)) + 1011000;
        new MarvelAPI().getCharacter(randomID)
            .then(res => {
                console.log(res)
                this.setState(res);
                this.setState({ loading: false })

            }).catch(
                () => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                }
            )
    }

    render() {

        return (
            <div className='random__character'>
                <div className='container'>
                    <div className='container__content'>
                        <div className='random__character__content'>
                            {this.state.loading ? <Loading /> : null}
                            {!this.state.loading && !this.state.error ? <View state={this.state} /> : null}
                            {this.state.error ? <Error /> : null}
                        </div>
                        <div className='random__info'>
                            <div className='random__info__content'>
                                <p> Random character for today!
                                    <br></br>
                                    Do you want to get to know him better?</p>
                                <p>Or choose another one</p>
                                <a href='#' style={{
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
}

const View = ({ state }) => {

    let { name, description, thumbnail, wiki } = state;
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
                <a href='#' style={{
                    background: '#9F0013'
                }}><span>HOMEPAGE</span></a>

                <a href={wiki} style={{
                    background: 'grey'
                }}><span>WIKI</span></a>
            </div>
        </div>
    </>
}

export default RandomCharacter;