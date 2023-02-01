import { useEffect, useState} from 'react'
import { useParams, Link,useNavigate   } from 'react-router-dom'
import { getApi } from '../../helpers'
import './style.css'

const Usersresults = () => {
    const { name } = useParams();
    const history = useNavigate()

    const [ User, setUser ] = useState([]);

    const fetchUser = async () => {
            const data = await getApi(`https://api.github.com/search/users?q=${name}`);
        setUser(data.items);
    }


    useEffect(() => {
        fetchUser();
      }, []);

    return (
        
        
        <div className='Content-users'>
            <button className='btn-back' onClick={() => history(-1) }>Back</button>
            <div className='UsersControls'>
                
                <h1 className="Users__titulo">Resultado de la busqueda del usuario: @{name}</h1>
            </div>

            <div className='UsersCards'>
                    {User.length > 0 &&
                                User.map((element) => (
                                            <Link key={element.id} className="Users__card" to={`/user/${element.login}`}>
                                                
                                                    <div className="Users__thumb">
                                                        <img className="Users__img" src={element.avatar_url} alt={element.login}/>
                                                    </div>
                                                    <div className="Users__name">
                                                        <h1>{element.login}</h1>
                                                    </div>
                                            </Link>
                                ))}
            </div>
            
        </div>
    )
}

export default Usersresults