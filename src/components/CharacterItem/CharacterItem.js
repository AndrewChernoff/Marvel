import React from "react";
import '../CharacterItem/CharacterItem.scss';

class CharacterItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='character'>
                hero:{this.props.item[0].name}
                <br></br>
                descr:{this.props.item[0].descr}
                <br></br>
                id:{this.props.item[0].id}
            </div>
        )
    }
}

export default CharacterItem;