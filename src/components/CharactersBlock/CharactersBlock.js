import CharacterItem from "../CharacterItem/CharacterItem";
import Characters from "../Characters/Characters";
import AnimatePage from "../Common/AnimatePage/AnimatePage";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary ";
import NotSelected from "../NotSelected/NotSelected";
import RandomCharacter from "../RandomChar/RandomChar";
import SearchingForm from "../SearchingForm/SearchingForm";

const CharactersBlock = ({ getSelectedItem, selectedId }) => {
    return <AnimatePage>
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
                    {/* <SearchingForm /> */}
                </div>
            </div>
        </div>
    </AnimatePage>

}

export default CharactersBlock;