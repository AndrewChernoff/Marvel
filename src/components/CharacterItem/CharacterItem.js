import React, { useEffect, useState } from "react";
import MarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";
import '../CharacterItem/CharacterItem.scss';
import ViewCharacterItem from "../Characters/ViewCharacterItem/ViewCharacterItem";
import Error from "../Common/Error/Error";
import Loading from "../Common/Loading/Loading";
import PropTypes from 'prop-types';
import useMarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";

const CharacterItem = (props) => {

    let [character, setCharacter] = useState({});
    let { getCharacter, error, loading } = useMarvelAPI();


    useEffect(() => {
        console.log('hey')
        getCharacter(props.selectedId)
            .then(character => {
                setCharacter(character);
            })
    }, [props.selectedId]);

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