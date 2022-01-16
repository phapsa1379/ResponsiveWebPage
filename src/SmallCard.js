import React from 'react';
import style from './SmallCard.module.css';





class SmallCard extends React.Component
{



    render()
    {


        return(
            <div className={style.eachSmallCard}>
                <img className={style.imageSmallCard} src={this.props.imgSrc} alt="" />
                <div className={style.titleSmallCard}>{this.props.title}</div>
                <div className={style.textSmallCard}>{this.props.text}</div>
            </div>
        );
    }
}



export default SmallCard;