import _ from 'lodash';
import React, {Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
//AIzaSyDm-TRwc1W04xuMEDYIpgyb0ut4ZpgyH0I
const API_KEY = 'AIzaSyDm-TRwc1W04xuMEDYIpgyb0ut4ZpgyH0I';

// criar um novo componente. E este componente deve produzir HTML.
class App  extends Component {
  constructor(props){
    super(props);

    this.state = { 
      videos: [],
      selectedVideo : null
    };

    this.videoSearch('surfboards');
    
  }

  videoSearch(term){
    YTSearch( { key: API_KEY, term: term }, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]  
      });
    });
  }


  render() {
    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300) ; 

    return(
      <div>
      <SearchBar onSearchTermChange = {videoSearch}/>
      <VideoDetail video = {this.state.selectedVideo } />
      <VideoList 
        onVideoSelect ={selectedVideo => this.setState({selectedVideo} ) }
        videos = {this.state.videos } />
      </div>
    );
  }
}

//Pegue este componente e gere HTML e ponha na página. ( no DOM ).
ReactDOM.render(<App />, document.querySelector('.container'));
