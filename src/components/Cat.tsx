import React from 'react';
import { Cat } from '../store/ducks/cats/state';
import { Link } from 'react-router-dom'


interface CatProps {
    cat: Cat
}

const Cat: React.FC<CatProps> = ({
                                     cat
                                 }) => {
    const {name, origin, image, temperament, id} = cat
    return (
        <div className="user-block">
            <Link to={`/cat/${id}`}>
                <img className="user-block__image"
                     src={image.url}
                />
                <h4 className="user-block__title">{name}</h4>
                <div className="user-block__information">
                    <ul>
                        {/*I chose key which will be display on page when I click by 'All users'*/}
                        {[name, origin, temperament].map((item, index) =>
                            <li key={`${index}_${item}`}>{item}</li>)
                        }
                    </ul>
                </div>
                <div className="user-block__bottom">
                    <button
                            className="button">View
                    </button>
                </div>
            </Link>

        </div>

    );
};

export default Cat;
