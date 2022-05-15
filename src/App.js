import './App.scss';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import RandomCharacter from './components/Thor/Thor';
import img from '../src/resourses/img/thor.png';
import CharacterItem from './components/CharacterItem/CharacterItem';
import React from 'react';
import NotSelected from './components/NotSelected/NotSelected';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 1
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 2
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 3
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 4
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 5
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 6
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 7
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 8
        },
        {
          name: 'Someone',
          img: { img },
          descr: 'In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.',
          id: 9
        }
      ],
      selectedItem: null
    }
  }
  getSelectedItem = (item) => {
    this.setState({
      selectedItem: item
    })
  }
  selectedItem = () => {
    if (!this.state.selectedItem) {
      return;
    }
    else {
      return this.state.characters.filter(item => item.id === this.state.selectedItem);
    }
  }


  render() {
    let item = this.selectedItem()
    return (
      <>
        <Header />
        <RandomCharacter />
        <div className='charactersBlock'>
          <div className='container'>
            <div className='charactersBlock__content'>
              <Characters characters={this.state.characters} getSelectedItem={this.getSelectedItem} />
              {!this.state.selectedItem ? <NotSelected /> : <CharacterItem item={item} />}
            </div>
            <button>LOAD MORE</button>
          </div>
        </div>
      </>
    )
  }
}

export default App;
