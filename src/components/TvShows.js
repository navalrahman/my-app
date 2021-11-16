import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const TvShows = () => {

    const shows = [{id: 1, name :'avengers'}, {id:2, name:'13 reasons why'},{id:3, name: 'money hiest'}, {id:4, name:'dark'}, {id:5, name:'friends'}, {id: 6, name:'squid game'}]


    return (
        <div>
            <h3>TvShows Component</h3>
            {
                shows.map((ele) => {
                    return <blockquote><Link to={`/tv-shows/${ele.name}`}>{ele.name}</Link></blockquote>
                })
            }        
        </div>
    )
}

export default TvShows
