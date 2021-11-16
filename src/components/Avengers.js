import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Avengers = (props) => {
    const [ show, setShow] = useState([])
    // const name = props.match.params



    useEffect(()=> {
        axios.get('https://api.tvmaze.com/search/shows?q=avengers')
        .then((response) => {
            const result = response.data
            console.log(result)
            setShow(result)
        })
    },[])

    return (
        <div>
            avengers components

            <h2>Shows - {show.length} </h2>
            {
                show.map((shows) => {
                    return (
                        <div>
                        <h3>Name -<Link to={`/details/${shows.show && shows.show.id}`}> {shows.show && shows.show.name} </Link></h3>
                        <p>Lang - {shows.show && shows.show.language}</p>
                        {/* <img  src={shows.show && shows.show.image && shows.show.image.medium}/>
                        <p>Avg -  {shows.show && shows.show.rating && shows.show.rating.average}</p>
                        <p>Runtime - {shows.show && shows.show.runtime}</p>
                        <p>Premiered - {shows.show && shows.show.premiered}</p> */}
                        <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Avengers