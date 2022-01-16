import React from 'react';
import footerStyle from './Footer.module.css';





class Footer extends React.Component
{


    render()
    {
        return(
            <footer>
                <div className={footerStyle.firstPart}>
                    <section className={footerStyle.section1}>
                        <div class={footerStyle.title}>LOREM IPSUM</div>
                        <div className={footerStyle.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi cum ducimus fugit id incidunt inventore itaque libero molestiae nulla odio odit, perspiciatis recusandae suscipit voluptate. Architecto dolores ex impedit?
                        </div>
                    </section>
                    <section className={footerStyle.section2}>
                        <div class={footerStyle.title}>LOREM IPSUM</div>
                        <div className={footerStyle.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, ab accusamus autem blanditiis cumque dolorum ducimus earum est eum facilis incidunt itaque modi nostrum obcaecati omnis porro provident voluptas voluptatibus!
                        </div>
                    </section>
                    <section className={footerStyle.section3}>
                        <div class={footerStyle.title}>LOREM IPSUM</div>
                        <div className={footerStyle.text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut delectus doloremque eos excepturi fugit impedit iure mollitia, nihil nobis officia officiis omnis qui quia, quos repudiandae, sequi velit voluptatem.
                        </div>
                    </section>

                </div>
                <div className={footerStyle.copyRightPart}>© 2022 This site is created by [PGS 771] </div>
            </footer>
        );
    }
}


export default Footer;