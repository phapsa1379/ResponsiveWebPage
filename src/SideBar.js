import React from 'react';
import style from './SideBar.module.css';
import NarrowCard from "./NarrowCard";
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';



class SideBar extends React.Component
{
    render()
    {
        return(
            <aside className={style.sideBarContainer}>
                <div className={style.popularPosts}>
                    <h2>POPULAR POSTS</h2>
                    <div className={style.narrowCardContainer}>
                        <NarrowCard title={"Travelling With Stra..."} img={image7} text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem "} />
                        <NarrowCard title={"Travelling With Stra..."} img={image6} text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem "} />
                        <NarrowCard title={"Travelling With Stra..."} img={image5} text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem "} />
                        <NarrowCard title={"Travelling With Stra..."} img={image4} text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem "} />
                        <NarrowCard title={"Travelling With Stra..."} img={image3} text={"orem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem "} />
                    </div>

                </div>
                <div className={style.archives}>
                    <h2>ARCHIVES</h2>
                    <div className={style.archivesContainer}>
                        <div className={style.eachArchive}>
                            January 2022
                        </div>
                        <div className={style.eachArchive}>
                            December 2021
                        </div>
                        <div className={style.eachArchive}>
                            November 2021
                        </div>
                        <div className={style.eachArchive}>
                            September 2021
                        </div>
                    </div>
                </div>
                <div className={style.social}>
                    <h2>LETS GET SOCIAL!</h2>
                    <div className={style.socialContainer}>
                        <div className={style.twitterIconContainer}>
                            <i className={`fab fa-twitter ${style.twitterIcon}`}></i>
                        </div>
                        <div className={style.facebookIconContainer}>
                            <i className={`fab fa-facebook-f ${style.facebookIcon}`}></i>
                        </div>
                        <div className={style.pinterestIconContainer}>
                            <i className={`fab fa-pinterest ${style.pinterestIcon}`}></i>
                        </div>
                        <div className={style.linkedinIconContainer}>
                            <i className={`fab fa-linkedin-in ${style.linkedinIcon}`}></i>
                        </div>
                    </div>
                </div>
                <div className={style.advertisement}>
                    <h2>ADVERTISEMENT</h2>
                    <div className={style.advertisementContainer}>
                        Banner Ad 300x300
                    </div>
                </div>

            </aside>
        );
    }
}



export default SideBar;