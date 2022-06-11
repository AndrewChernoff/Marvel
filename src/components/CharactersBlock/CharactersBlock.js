import CharacterItem from "../CharacterItem/CharacterItem";
import Characters from "../Characters/Characters";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary ";
import NotSelected from "../NotSelected/NotSelected";
import RandomCharacter from "../RandomChar/RandomChar";

const CharactersBlock = ({ getSelectedItem, selectedId }) => {
    return <>
        <RandomCharacter />
        <div className='charactersBlock'>
            <div className='container'>
                <div className='charactersBlock__content'>
                    <ErrorBoundary>
                        <Characters getSelectedItem={getSelectedItem} selectedId={selectedId} />
                    </ErrorBoundary>
                    {!selectedId ? <NotSelected /> :
                        <ErrorBoundary>
                            <CharacterItem selectedId={selectedId} />
                        </ErrorBoundary>}
                </div>
            </div>
        </div>
    </>
}

export default CharactersBlock;