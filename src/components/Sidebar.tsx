import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom'
import {selectCatsItems} from "../store/ducks/cats/selectors";
import listImg  from '../assets/img/list.svg'
import {actions} from "../store/ducks/cats/actionCreators";

const Sidebar: React.FC = () => {
    const cats = useSelector(selectCatsItems)
    const dispatch = useDispatch()

    React.useEffect(() => {
        actions.fetchCats()
    }, [dispatch])

    return (
        <div className="sidebar">
            <Link to={"/"}>
                <img src={listImg}/>
                <span>All cats</span>
            </Link>
            {cats
                ? <ul className="cats">
                    {cats && cats.map((item) =>
                        <li key={item.name}>
                            <Link to={`/cat/${item.id}`}>
                                {item.name}
                            </Link>
                        </li>
                    )}
                </ul>
                : "Loading"
            }
        </div>
    );
};

export default Sidebar;
