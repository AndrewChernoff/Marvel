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
            error: false
        }
    }

    getCharacters = () => {
        this.setState({ loading: true });
        new MarvelAPI().getAllCharcters()
            .then(res => {
                this.setState({ characters: res.data.results });
                this.props.getCharacters(res.data.results);
                this.setState({ loading: false });
            }).catch(() =>
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
            {!this.state.loading && !this.state.error ? <ViewCharacters characters={characters} /> : null}
        </>
        )
    }

}

class ViewCharacters extends React.Component {
    render() {
        const { characters } = this.props;
        return (
            <div className='characters' >
                {characters}
            </div>
        )
    }
}

export default Characters;