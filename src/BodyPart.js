import React from 'react';
import style from './BodyPart.module.css';
import SmallCard from './SmallCard';
import BigCard from './BigCard';
import PageNumber from "./PageNumber";
import SideBar from "./SideBar";




import coffee from './assets/images/coffee.png';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';
import image7 from './assets/images/image7.jpg';

import transfer from './assets/images/transfer.png';
import mail from './assets/images/mail.png';



class BodyPart extends React.Component
{



    render()
    {
        let lorem="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad culpa cupiditate eum exercitationem illo, impedit in, incidunt inventore natus, nobis omnis quis quo quos saepe soluta tempora voluptate voluptatem voluptates.";
        let lorem2=`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id ipsum officia porro quo vel. Ab autem fugit
            ipsa laborum libero perspiciatis, quo reiciendis repellendus. Cupiditate distinctio ea magnam neque
            quibusdamAccusamus animi aut, consectetur consequuntur cumque delectus deleniti doloribus eligendi expedita in ipsam
            iure necessitatibus, neque porro qui quisquam quo quos repellendus sit suscipit tempora temporibus ut vel
            voluptatem voluptatibu Accusamus animi aut, consectetur consequuntur cumque delectus deleniti doloribus eligendi expedita in ipsam
            iure necessitatibus, neque porro qui quisquam quo quos repellendus sit suscipit tempora temporibus ut vel
            voluptatem voluptatibus`;

        return(
            <main>
            <section className={style.SmallCardContainer}>
                <SmallCard text={lorem} title="Who I am" imgSrc={coffee} />
                <SmallCard text={lorem} title="Why I Write" imgSrc={transfer} />
                <SmallCard text={lorem} title="What I Do" imgSrc={mail} />
            </section>
             <section className={style.section2}>
                 <div className={style.bigCardContainer}>
                    <BigCard img={image3} title="How Ace Your Life" subTitle={"Posted in january 20, 2022 by Pasha Ahmadi"} text={lorem2} />
                    <BigCard img={image4} title="How Ace Your Life" subTitle={"Posted in january 20, 2022 by Pasha Ahmadi"} text={lorem2} />
                    <BigCard img={image5} title="How Ace Your Life" subTitle={"Posted in january 20, 2022 by Pasha Ahmadi"} text={lorem2} />
                    <BigCard img={image6} title="How Ace Your Life" subTitle={"Posted in january 20, 2022 by Pasha Ahmadi"} text={lorem2} />
                    <BigCard img={image7} title="How Ace Your Life" subTitle={"Posted in january 20, 2022 by Pasha Ahmadi"} text={lorem2} />
                    <div className={style.pageNumbers}>
                        <PageNumber number="1"/>
                        <PageNumber number="2"/>
                        <PageNumber number="next"/>
                    </div>
                 </div>
                 <div className={style.sideBarContainer}>
                     <SideBar />
                 </div>


             </section>
            </main>
        );
    }



}



export default BodyPart;

