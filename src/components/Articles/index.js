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
    