import preloader from '../Loading/loading.gif';
import '../Loading/Loading.scss';

const Loading = () => {
    return (
        <>
            <img className='loading__img' src={preloader} alt='loading' />
        </>
    )
}

export default Loading;