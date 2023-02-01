import { useState, useEffect } from 'react';
import { useParams, Link,useNavigate } from 'react-router-dom'
import { getApi } from '../../helpers'
import './style.css'

const Userresult = () => {
    const { userName } = useParams();
    const history = useNavigate();

    const [ user, setUser  ] = useState({});
    const [ repos, setRepos ] = useState([]);

    const fetchUser = async () => {
        const response = await getApi(`https://api.github.com/users/${userName}`)

        setUser(response);
    }

    const fetchRepos = async() => {
        const response = await getApi(`https://api.github.com/users/${userName}/repos?sort=created`)
        setRepos(response);
    }

    useEffect(() => {
        fetchUser();
    }, [])

    useEffect(() => {
        fetchRepos();
    }, [])

    return (
        <>
            <button className='btn-back' onClick={() => history(-1) }>Back</button>
            <div className='Content-User'>
            
                
                <div className='User__thumb'>
                    <img src={user.avatar_url} alt={user.login} className="User__img"/>
                </div>
                <div className='User__Datos'>
                        <h2 className='User__name'>{user.login}</h2>
                        <h3 className='user-login'>{user.name}</h3>
                        
                        <div className='list-dscrp'>
                                <div>
                                    <p>
                                        <span>{user.followers} followers</span> . <span>{user.following} following</span>
                                   </p>
                                </div>

                        </div>
                </div>
               
            </div>
            <div className=' fondoCuadrado'>
                    <h1 className='Repositories__title'>Repositories</h1>
                    <div className='Repositories'>

                                    {repos.length > 0 && 
                                    repos.map((element) => (
                                    <Link key={element.id} className='Repositories__link' to={`/repos/${userName}/${element.name}`}>
                                        <div className="card-user">
                                            <div className="repo-name">
                                              <h1 className='ttl-user'>{element.name} </h1><span className='Repositories__skill'>{element.language}</span>
                                              
                                            </div>
                                        </div>
                                    </Link>
                                    ))}
                                </div>
            </div>
            
        </>
    )
}

export default Userresult