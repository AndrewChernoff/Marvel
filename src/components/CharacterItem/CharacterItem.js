import React from "react";
import MarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import '../CharacterItem/CharacterItem.scss';
import Error from "../Common/Error/Error";
import Loading from "../Common/Loading/Loading";

class CharacterItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
            loading: true,
            error: false
        }
    }

    getCharacter = () => {
        this.setState({ loading: true });
        new MarvelAPI().getCharacter(this.props.selectedId)
            .then((res) => {
                this.setState({ character: res });
                this.setState({ loading: false });
            }).catch(() =>
                this.setState({
                    loading: false,
                    error: true
                }));
    }

    componentDidMount() {
        this.getCharacter();
    }

    componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.getCharacter();
        }
    }


    render() {
        return (<>
            {this.state.loading ? <Loading /> : null}
            {this.state.error ? <Error /> : null}
            {!this.state.loading && !this.state.error ? <div className='character'>
                hero:{this.state.character.name}
                <br></br>
                descr:{this.state.character.description}
                <br></br>
                id:{this.state.character.id}
            </div>
                : null}
        </>
        )
    }
} //string 45 refactor later

export default CharacterItem;