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

        console.log(this.state.offset)

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

    render() {
        const characters = this.state.characters.map(item => {
            return <div onClick={() => this.props.getSelectedItem(item.id)} className='characters__item' key={item.id}>
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