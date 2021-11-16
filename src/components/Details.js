import React,{ useState, useEffect} from "react";
import axios from "axios";

const Details = (props) => {
    const [details, setDetails] = useState({})

    // const {id} = props.match.params

    useEffect(() => {
        // axios.get(`https://api.tvmaze.com/shows/${show.id}`)
        axios.get('https://api.tvmaze.com/shows/1929')
        .then((response) => {
            const result = response.data
            console.log(result)
            setDetails(result)
        })
    }, [])

    return (
        <div>
            <h3>Details </h3>
            <h2>Name - {details.name}</h2>
            <img src={details.image && details.image.medium} />
            <h4>Gener - {details.genres}</h4>
            <h4>language - {details.language}</h4>
            <p>{details.url}</p>
        </div>
    )
}

export default Details