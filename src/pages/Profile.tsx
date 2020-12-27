import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectCatsItems} from "../store/ducks/cats/selectors";
import {Cat} from "../store/ducks/cats/state";

interface ProfileProps {
    profile: Cat | null
}

const Profile: React.FC<ProfileProps> = () => {
    const cats = useSelector(selectCatsItems)
    const [profile, setActiveProfile] = useState<any>({})
    let { catId } = useParams<{[key:string]:string}>()
    const {name, origin, image, temperament, description} = profile


    const refreshProfile = (cats, catId) => {
        if (cats) {
            const cat = cats.find(cat => cat.id === catId)
            setActiveProfile(cat)
        }
    }

        useEffect(() => {
            refreshProfile(cats, catId)
        }, [cats, catId])


        return <>
            {profile
                ? <div className="profile">
                    <h2 className="profile__title">
                        {name}
                    </h2>
                    <div className="profile__block">
                        <div className="profile__block-info">
                            <div className="profile__block-info-photo">
                                <img src={image.url} alt="My avatar"/>
                            </div>
                            <div className="profile__block-info-about">
                                <div className={`profile__block-info-about-contacts`}>
                                    <h3 className={`profile__block-info-about-contacts-title`}>
                                        Contacts information
                                    </h3>
                                    <ul>
                                        {[origin, temperament, description].map(key =>
                                            <li key={key}>
                                                <span><b>{key.charAt(0).toUpperCase()+
                                                key.slice(1)}:</b></span>
                                            </li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : "Loading"
            }
        </>
    };

    export default Profile;
