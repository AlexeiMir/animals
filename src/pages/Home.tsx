import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Cat from '../components/Cat';
import {actions} from "../store/ducks/cats/actionCreators";
import {selectCatsItems, selectIsCatsLoading} from '../store/ducks/cats/selectors';
import {useHistory} from "react-router";


const Home: React.FC = (): React.ReactElement => {
    const history = useHistory()
    const dispatch = useDispatch()
    const cats = useSelector(selectCatsItems)
    const isLoading = useSelector(selectIsCatsLoading)


    React.useEffect(() => {
        actions.fetchCats()
    }, [dispatch])


    return (
        <div className="book__content">
            {isLoading && cats &&
            cats.map((cat,index) =>
                <Cat key={index}
                      cat={cat}/>)}
        </div>
    );
};

export default Home;
