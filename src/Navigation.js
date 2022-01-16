import React from 'react';
import style from './Navigation.module.css'
class Navigation extends React.Component {
    state={
        menueClick:false
    }


    render() {
        return (
            <nav>
                <ul className={style.navList}>
                    <li className={`${style.navItem} ${style.blogName}`} ><a href="#">Bloggist</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Home</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Blog</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Lifestyle</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Randomness</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Goals</a> </li>
                    <li className={`${style.navItem} ${style.navItem11} ${style.mode}`}><a className={style.navLink} href="#">Travelling</a></li>
                    <li className={`${style.navItem} ${style.mobile}`} onClick={(e)=>
                    {
                        this.setState({menueClick:!this.state.menueClick?true:false});
                    }}><a href="#"><i className={`fas fa-list ${style.listIcon}`}></i></a></li>
                </ul>
                <ul className={!this.state.menueClick?style.navList2:style.navList3}>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Home</a> </li>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Blog</a> </li>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Lifestyle</a> </li>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Randomness</a> </li>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Goals</a> </li>
                    <li className={`${style.navItem2}`}><a className={style.navLink2} href="#">Travelling</a></li>

                </ul>
            </nav>
        );
    }
}

export default Navigation;