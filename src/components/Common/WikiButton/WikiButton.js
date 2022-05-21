import './WikiButton.scss'

const WikiButton = ({ wiki }) => {
    return (
        <>
            <a href={wiki} style={{
                background: 'grey'
            }}><span>WIKI</span></a>
        </>
    )
}

export default WikiButton;