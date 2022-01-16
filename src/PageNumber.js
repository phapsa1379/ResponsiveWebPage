import React from 'react';
import style from './PageNumber.module.css';




class PageNumber extends React.Component
{




    render()
    {
        return(
            <div className={style.eachPage}>
                {this.props.number}
            </div>
        );
    }

}


export default PageNumber;
