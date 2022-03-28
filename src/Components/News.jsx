import react , {Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './spinner';
import Proptypes from 'prop-types';

export default class App extends Component{

  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: Proptypes.string,
    pageSize: Proptypes.number,
    category: Proptypes.string
  }

  capitalizeword = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }

    document.title = `News World - ${this.capitalizeword(this.props.category)}`;
  }

  updatePage = async () => {
    this.props.setProgress(10);
    this.setState({loading: true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e93f535d2ae348c78d67358ab54b7b5a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    })
    this.props.setProgress(100);
  }

  async componentDidMount(){
    this.updatePage()
  }

  handleNextClick = async () => {
    this.setState({
      page: ++this.state.page,
    })
    // console.log(this.state.page);
    this.updatePage();
  }

  handlePrevClick = async () => {
    this.setState({
      page: --this.state.page,
    })
    this.updatePage();
  }

  render(){
    return (
      <div className='container my-3' >
        <h1 className='text-center my-5'> <span style={{color: '#4198ff'}}>News World</span> - Current News on {this.capitalizeword(this.props.category)} </h1>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element) => {
            return (<div className='col-md-4' key = {element.url}>
              <NewsItem title={element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl = {element.url} author = {element.author ? element.author : 'Unknown'} date = {element.publishedAt} source = {element.source.name} />
            </div>)
          })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled = {this.state.page <= 1} type="button" className="btn btn-info" onClick={this.handlePrevClick}> &larr; Prev </button>
          <button disabled = {this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} type="button" className="btn btn-info" onClick={this.handleNextClick}> Next &rarr; </button>
        </div>
      </div>
    );
  }
}