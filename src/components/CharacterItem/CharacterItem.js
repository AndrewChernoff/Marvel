import React, { useEffect, useState } from "react";
import MarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import '../CharacterItem/CharacterItem.scss';
import ViewCharacterItem from "../Characters/ViewCharacterItem/ViewCharacterItem";
import Error from "../Common/Error/Error";
import Loading from "../Common/Loading/Loading";
import PropTypes from 'prop-types';

const CharacterItem = (props) => {

    let [loading, setLoading] = useState(true);
    let [error, setError] = useState(false);
    let [character, setCharacter] = useState(null);

    useEffect(() => {
        getCharacter();
    }, [props.selectedId]);

    const getCharacter = () => {
        setLoading(true);
        new MarvelAPI().getCharacter(props.selectedId)
            .then((res) => {
                setCharacter(res);
                setLoading(false);
            }).catch(
                () => {
                    setError(true);
                    setLoading(false);
                })
    }



    /* componentDidUpdate(prevProps) {
        if (this.props.selectedId !== prevProps.selectedId) {
            this.getCharacter();
        }
    } */


    return (<>
        {loading ? <Loading /> : null}
        {error ? <Error /> : null}
        {!loading && !error ? <ViewCharacterItem character={character} /> : null}
    </>
    )
}


CharacterItem.propTypes = {
    selectedId: PropTypes.number
};

export default CharacterItem;