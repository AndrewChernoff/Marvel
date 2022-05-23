import './WikiButton.scss'

const WikiButton = ({ wiki }) => {
    return (
        <>
            <a className='wiki__btn' href={wiki} style={{
                background: 'grey'
            }}><span>WIKI</span></a>
        </>
    )
}

export default WikiButton;