import react , {Component} from 'react';

export default class NewsItem extends Component{

    render(){
        let {title , description , imageUrl , newsUrl , author , date , source} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div className="card-header bg-transparent border-success"> Published On: {new Date(date).toDateString()} </div>
                    <img src={imageUrl ? imageUrl : "https://fdn.gsmarena.com/imgroot/news/22/03/realme-gt-neo3-ofic/-952x498w6/gsmarena_00.jpg"} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} rel="noopener" target='_blank' className="btn btn-sm btn-dark"> Read More </a>
                    </div>
                    <div style={{display: 'flex' , justifyContent: 'flex-end' , position: 'absolute' , right: '0'}}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-success"> Author: {author} </div>
            </div>
        )
    }
}