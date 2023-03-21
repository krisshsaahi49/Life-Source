import React, {Component} from 'react';
import EventTeamItem from './EventTeamItem';
import Slider from 'react-slick';

class EventTeam extends Component{
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
        };
        return(
            <section id="team" className="event_team_area sec_pad">
            <div className="container">
                <div className="hosting_title security_title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay="0.2s"><span>Our Dynamic Team</span></h2>
                </div>
                <Slider ref={c => (this.slider = c)} className="event_team_slider" {...settings}>
                    <EventTeamItem image="team_01.jpg" name="Krishna Saahi Yavana" post="Backend Developer"/>
                    <EventTeamItem image="team_01.jpg" name="Chinmaie Tiyyagura" post="Frontend Developer"/>
                    <EventTeamItem image="team_01.jpg" name="Uma Sowmya Puppala" post="Database Adminstrator"/>
                </Slider>
            </div>
        </section>
        )
    }
}

export default EventTeam;