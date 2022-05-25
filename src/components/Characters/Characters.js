import React from "react";
import '../Characters/Characters.scss';
import MarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import Loading from "../Common/Loading/Loading";
import Error from "../Common/Error/Error";

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            loading: true,
            error: false,
            offset: 509,
            newCharsPortion: false
        }
    }

    getCharacters = () => {
        this.setState({ loading: true });
        new MarvelAPI().getAllCharcters()
            .then(res => {
                this.setState({
                    characters: res.data.results,
                    loading: false
                });
            }).catch(() =>
                this.setState({
                    loading: false,
                    error: true
                }))
    }

    onLoadMoreBtn = () => {
        this.setState({
            newCharsPortion: true,
            offset: this.state.offset + 9
        })

        new MarvelAPI().getAllCharcters(this.state.offset)
            .then(res => {
                this.setState({
                    loading: false,
                    characters: [...this.state.characters, ...res.data.results],
                    newCharsPortion: false
                });
            })
            .catch(() =>
                this.setState({
                    loading: false,
                    error: true
                }))
    }



    componentDidMount() {
        this.getCharacters();
    }

    refItems = [];

    setRef = (ref) => {
        this.refItems.push(ref);
    }

    onFocus = (id) => {
        this.refItems.forEach(item => item.classList.remove('characters__item__active'));
        this.refItems.forEach(item => item.classList.add('characters__item'));
        this.refItems[id].classList.add('characters__item__active');
        this.refItems[id].focus();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(event.currentTarget);
            this.onFocus(event.currentTarget.dataset.number);
        }
    }

    render() {
        const characters = this.state.characters.map((item, i) => {

            return <div tabIndex={0} data-number={i} ref={this.setRef} onClick={() => {
                this.props.getSelectedItem(item.id);
                this.onFocus(i);
            }}
                onKeyPress={(e) => {
                    this.handleKeyPress(e)
                    this.props.getSelectedItem(item.id);
                }}

                className={`${this.props.selectedId === item.id ? 'characters__item__active' : 'characters__item'}`} key={item.id}>
                <img src={item.thumbnail.path + '.' + item.thumbnail.extension} alt={item.name} />
                <div className='characters__item__name'>{item.name}</div>
            </div>
        })
        return (<>
            {this.state.loading ? <Loading /> : null}
            {this.state.error ? <Error /> : null}
            {!this.state.loading && !this.state.error ? <ViewCharacters characters={characters}
                newCharsPortion={this.state.newCharsPortion}
                onLoadMoreBtn={this.onLoadMoreBtn}
                offset={this.state.offset}
            /> : null}
        </>
        )
    }

}

class ViewCharacters extends React.Component {
    render() {
        const { characters, onLoadMoreBtn, newCharsPortion, offset } = this.props;
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
}

export default Characters;