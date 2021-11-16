import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UserShow = (props) => {
    const {id} = props.match.params
    const [users, setUsers] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
                const result = response.data
                setUsers(result)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])
    return (
        
        <div>
            <h1>Show - {id}</h1>
            <p>{users.name} - {users.email} - {users.address && users.address.city}</p>
            <Link to="/users">back</Link>
        </div>
    )
}

export default UserShow