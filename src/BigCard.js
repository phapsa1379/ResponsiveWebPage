import React from 'react';
import style from './BigCard.module.css';





class BigCard extends React.Component
{



    render()
    {
        return(
            <div className={style.eachBigCard}>
                <img className={style.imgBigCard} src={this.props.img} alt="" />
                <div className={style.textPart}>
                    <div className={style.title}>{this.props.title}</div>
                    <div className={style.subTitle}>{this.props.subTitle}</div>
                    <div className={style.text}>{this.props.text}</div>

                </div>

            </div>
        );
    }
}


export default  BigCard;