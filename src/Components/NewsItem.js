import React from 'react'

const NewsItem = (props) => {
 

    let {title,description,imageUrl,newsUrl,author,date} = props 
    return (
      <div className='my-3'>
        <div className="card" >
  <img src={!imageUrl?'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202209/artemis-6-647x363.jpeg?k30kaaohuHFZihc3yB5XLxqLi8E9AkeP':imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a rel='no referral' href={newsUrl} target={'_blank'} className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
         </div>
    )
  }


export default NewsItem