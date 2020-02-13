import React from 'react';
import {connect} from 'react-redux';
import * as action from './store/action';


class App extends React.Component{

  state = {
  }

  componentDidMount(){
    this.props.getAll();
  }

  handleGetClick = (id) => {
    console.log(`select ${id}`);
    this.props.getCurrent(id);
  }

  render(){
    let list = [];
    let tracks = this.props.tracks;
    let currentTrack = this.props.currentTrack;
    if(tracks){
      for(let title in tracks){
        let elements = [];
        for(let element in tracks[title]){
          elements.push(<ul>
            {element}:{tracks[title][element]}
          </ul>);
        }
        list.push(<li key={title}>
          <button onClick= {() => this.handleGetClick(title)}>{title}</button>
          {elements}
        </li>);
      }
    }else{list = 'no tracks'};

    return (<div>
      <ul>
        {list}
      </ul>
      <div>
    {(currentTrack)?Object.keys(currentTrack).map(key => (<p>{key}:{currentTrack[key]}</p>)):'no track selected'}
      </div>
    </div>);
  }
}

const mapStateToProps = state => ({
    tracks: state.tracks,
    currentTrack: state.currentTrack
});

const mapDispatchToProps = dispatch => ({
    getAll: () => action.getAll()(dispatch),
    getCurrent: (id) => action.getCurrent(id)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
