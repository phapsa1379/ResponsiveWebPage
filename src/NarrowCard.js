import React from 'react';
import style from './NarrowCard.module.css';




class NarrowCard extends React.Component
{


    render()
    {
        return(
            <div className={style.eachNarrowCard}>
                <img className={style.imgNarrowCard} src={this.props.img} alt="" />
                <div className={style.textPart}>
                    <div className={style.title}>
                        {this.props.title}
                    </div>
                    <div className={style.text}>
                        {this.props.text}
                    </div>
                </div>
            </div>
        );
    }

}

export default NarrowCard;