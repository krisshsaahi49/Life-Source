import React from 'react';
import Reveal from 'react-reveal/Reveal/';
const Banner =(props)=> {
    var {Ptitle, Pdescription,bannerClass, imgName} = props;
    
        
        return(
            <section className={`${bannerClass}`}>
                <img className="banner_shap" src={require ("../img/" + imgName)} alt=""/>
                <div className="container">
                    <div className="banner_content text-center">
                        <Reveal effect="fadeInUp"><h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">{Ptitle}</h1></Reveal>
                        <p className="f_400 w_color f_size_16 l_height26">{Pdescription}</p>
                    </div>
                </div>
            </section> 
        )
    
}
export default Banner;