import React from "react";
import thor from '../../resourses/img/thor.png';
import { NavLink } from "react-router-dom";
import '../Characters/Characters.scss';

class Characters extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        const characters = this.props.characters.map(item => {
            return <div onClick={() => this.props.getSelectedItem(item.id)} className='characters__item' key={item.id}>
                <img src={thor} alt={item.name} />
                <div className='characters__item__name'>{item.name}</div>
            </div>
        })
        return (
            <div className='characters' >
                {characters}
            </div>
        )
    }
}

export default Characters;