import React from 'react';
import style from './Header.module.css'
import image1 from './assets/images/headerImage1.jpg'
import Navigation from "./Navigation";



class Header extends React.Component
{


    render()
    {
        return(
            <header>
                <Navigation />
                <figure className={style.headerImageContainer}>
                    <img src={image1} alt="header image" className={style.headerImage} />
                    <caption>
                        <div className={style.headerTitle1}>The Backpacker</div>
                        <div className={style.headerTitle2}> Jobs fill your packets, adventures fill your soul.</div>
                    </caption>
                </figure>

            </header>
        )
    }


}

export default Header


