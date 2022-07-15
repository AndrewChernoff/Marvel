import React, { useEffect, useState } from "react";
import '../CharacterItem/CharacterItem.scss';
import ViewCharacterItem from "../Characters/ViewCharacterItem/ViewCharacterItem";
import Error from "../Common/Error/Error";
import Loading from "../Common/Loading/Loading";
import PropTypes from 'prop-types';
import useMarvelAPI from "../../DAL/MarvelAPI/MarvelAPI";

const CharacterItem = ({ selectedId }) => {

    let [character, setCharacter] = useState(null);
    let { getCharacter, error, loading } = useMarvelAPI();

    useEffect(() => {
        if (selectedId) {
            getCharacter(selectedId)
                .then(character => {
                    setCharacter(character);
                })
        }
    }, [selectedId]);

    return (<>
        {loading ? <Loading /> : null}
        {error ? <Error /> : null}
        {!loading && !error && character ? <ViewCharacterItem character={character} /> : null}
    </>
    )
}


CharacterItem.propTypes = {
    selectedId: PropTypes.number
};

export default CharacterItem;