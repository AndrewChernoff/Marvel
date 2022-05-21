import React from "react";
import HomePageBtn from "../../Common/HomePageBtn/HomePageBtn";
import WikiButton from "../../Common/WikiButton/WikiButton";
import '../ViewCharacterItem/ViewCharacterItem.scss';

class ViewCharacterItem extends React.Component {
    render() {
        const { character } = this.props.state
        const comics = character.comics.items;
        const size = 10
        const limited = comics.slice(0, size) /// first ten items of the array (array of comics)
        const comicsItems = limited.map((item) => {
            return <div key={character.comics.items.indexOf(item) + 1} className='character__comics-items__bar'> {item.name}</div>
        })

        return <div className='character'>
            <div className='character__item'>
                <div className='character__container'>
                    <div className='character__shortInfo'>
                        <div>
                            <img src={character.thumbnail} alt={character.name} />
                        </div>

                        <div className='character__shortInfo__management'>
                            <h2>{character.name}</h2>
                            <div className='character__shortInfo__management__btns'>
                                <HomePageBtn />
                                <WikiButton wiki={character.wiki} />
                            </div>
                        </div>
                    </div>
                    <div className='character__restInfo'>
                        <br></br>
                        <div className='character__descr'>{character.description}</div>
                        <br></br>
                        <div className='character__comics'>Comics:</div>
                        <div className='character__comics-items'>
                            {comicsItems.length === 0 ? <div> No comics with this character </div> : comicsItems}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ViewCharacterItem;