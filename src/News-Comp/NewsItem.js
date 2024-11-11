import React from 'react'

const  News_Item = (props) => {
      let  {title,discription,imageUrl,newsUrl,author, date} = props;
    return (
      <div className='my-3'>
        <div className="card">
       <img src={!imageUrl?"https://tse1.mm.bing.net/th?id=OIP.Ghae4OEdb4UmC3hkqpFvLAHaGd&pid=Api&P=0&h=180":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
        <p className="card-text">{discription}</p>
        <p className='crad-text'><small className='text-muted'>By { !author?"Unknown":author} on { new Date(date).toGMTString()}</small></p>
      <a href={newsUrl} target='blank' className=" btn btn-sm  btn-primary">Read More</a>
  </div>
  </div>
      </div>   
    )
 
}

export default News_Item
