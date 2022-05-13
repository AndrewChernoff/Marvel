import '../NotSelected/NotSelected.scss';

const NotSelected = () => {
    return (
        <div className='notSelected'>
            <h2>Please select a character to see information</h2>
            <div className='notSelected__figures'>
                <div className='notSelected__figures__info'>
                    <div className='notSelected__figures__info__circle'></div>
                    <div className='notSelected__figures__info__block'></div>
                </div>
                <div className='notSelected__figures__block'></div>
                <div className='notSelected__figures__block'></div>
                <div className='notSelected__figures__block'></div>
            </div>
        </div>
    )
}

export default NotSelected