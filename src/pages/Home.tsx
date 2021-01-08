import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import CatCart from '../components/CatCart';
import {actions} from "../store/ducks/cats/actionCreators";
import {
    selectCatsItems,
    selectIsCatsLoading,
    getCurrentPage,
    getPageSize,
    getTotalCatsCount
} from '../store/ducks/cats/selectors';
import Paginator from '../components/Paginator';


const Home: React.FC = (): React.ReactElement => {
    const dispatch = useDispatch()
    const cats = useSelector(selectCatsItems)
    const isLoading = useSelector(selectIsCatsLoading)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const totalCatsCount = useSelector(getTotalCatsCount)


    React.useEffect(() => {
        actions.fetchCats(currentPage, totalCatsCount)
    }, [dispatch])

    const onPageChanged = (pageNumber: number) => {
        dispatch(actions.fetchCats(pageNumber, totalCatsCount))
    }


    return (
        <div className="book__content">

            <Paginator currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalCatsCount}
                pageSize={pageSize}/>

            {isLoading && cats &&
            cats.map((cat, index) =>
                <CatCart key={index}
                    cat={cat}/>)}
        </div>
    );
};

export default Home;
