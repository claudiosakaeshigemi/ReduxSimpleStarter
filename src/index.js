import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
//AIzaSyDm-TRwc1W04xuMEDYIpgyb0ut4ZpgyH0I
const API_KEY = 'AIzaSyDm-TRwc1W04xuMEDYIpgyb0ut4ZpgyH0I';

// criar um novo componente. E este componente deve produzir HTML.
class App  extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch( { key: API_KEY, term: 'surfboards' }, (videos) => {
      //this.setState({ videos: videos});
      this.setState({ videos });
    });
  }

  render() {
    return( 
      <div>
      <SearchBar />
      <VideoList videos = {this.state.videos } />
      </div>
    );
  }
}

//Pegue este componente e gere HTML e ponha na página. ( no DOM ).
ReactDOM.render(<App />, document.querySelector('.container'));
