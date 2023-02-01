import { useEffect, useState } from "react";
import { useParams,Link,useNavigate }  from "react-router-dom"
import { getApi } from "../../helpers";
import './style.css'

const Repositories = () => {
    const { repositoriesInfo } = useParams();
    const { userName } = useParams();
    const history = useNavigate();

    const [ repositories, setRepositories ] = useState([]);
    const [ reposidates, setReposidates ] = useState({});

    const fetchRepositories = async() => {
        const response = await getApi(`https://api.github.com/repos/${userName}/${repositoriesInfo}/contents/`);

        setRepositories(response)
    }

    const fetchReposDates = async() =>{
        const response = await getApi(`https://api.github.com/repos/${userName}/${repositoriesInfo}`);
        setReposidates(response);
    }

    useEffect(() => {
        fetchRepositories();
    }, [])

    useEffect(()=>{
        fetchReposDates();
    },[])

    return (
        <section className="Content__Repositorie">
            
            <button className='btn-back' onClick={() => history(-1) }>Back</button>
                <h1 className="Repositorie__title">
                    {repositoriesInfo}
                </h1>
            <div className="RepositorieInfo">
                    <p className="RepositorieInfo__Item">Creado: {reposidates.created_at}</p>
                    <p className="RepositorieInfo__Item">Actualizado: {reposidates.updated_at}</p>
                    <p className="RepositorieInfo__Item">Visibilidad: {reposidates.visibility}</p>
                    <p className="RepositorieInfo__Item">Raiz por defecto: {reposidates.default_branch}</p>
            </div>
            

           <div className="Repositorie">
                
                <section className="Repositorie__Item">
                    {repositories.length > 0 &&
                    repositories.map((element) => (
                    <Link key={element.name+repositories.id} className="EnlaceRepositorio" to={`https://github.com/${userName}/${repositoriesInfo}/blob/main/${element.name}`} >
                            <h3>{element.name}</h3>
                        </Link>    
                    ))}
                </section>
           </div>
        </section>
    )
}

export default Repositories