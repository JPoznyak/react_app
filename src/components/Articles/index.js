import { useEffect } from "react";
import { Spinner, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArticlesError,
  selectArticlesList,
  selectArticlesLoading,
} from "../../store/articles/selectors";
import { getArticles } from "../../store/articles/actions";

export const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector(selectArticlesList);
  const isLoading = useSelector(selectArticlesLoading);
  const error = useSelector(selectArticlesError);

  const requestData = async () => {
    dispatch(getArticles());
  };

// const [articles, setArticles] = useState([]);
// const [error, setError] = useState(false);
// const [loading, setLoading] = useState(false);



// const requestData = async () => {
//     setLoading(true);
//     try {
//         const response = await fetch(apiUrl);
//         console.log(response);
        
//         if (!response.ok) {
//             throw new Error(`Request failed with status ${response.status}`);
//         }

//         const result = await response.json();
    
//         setError(false);
//         setArticles(result);
//     }
//     catch (err) {
//         console.warn(err);
//         setError(true);
//     }
//     finally {
//         setLoading(false);
//     }
// }

useEffect(() => {
    requestData();
}, []);

return (
    <>
    <Container>
        <h3>Articles</h3>
        {isLoading ? (
            <Spinner animation="border" variant="secondary" />
        ) : ( 
            <>
                <Button className="my-btn" onClick={requestData}>REQUEST</Button>
                {error && <h4>ERRROR: {error}</h4>}
    
                <ul>
                    {articles.map((art) => (
                        <li key={art.id}>{art.description || 'No description'}</li>
                    ))}
                </ul>
            </>
        )}
        </Container>
    </>
);
};    
    