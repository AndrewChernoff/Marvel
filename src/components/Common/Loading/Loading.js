import preloader from '../Loading/loading.gif';
import '../Loading/Loading.scss';

const Loading = () => {
    return (
        <div className='loading'>
            <img className='loading__img' src={preloader} alt='loading' />
        </div>
    )
}

export default Loading;