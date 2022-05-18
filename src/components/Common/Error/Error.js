import error from '../Error/error.gif';
import '../Error/Error.scss';

const Error = () => {
    return (
        <>
            <img className='error__img' src={error} alt='error' />
        </>
    )
}

export default Error;