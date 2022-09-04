import React from 'react';

export default class SideBar extends React.Component{
    render(){
        return (
            <div id='sideBar'>
                <a href="#home">
                    <img src="./img/icon/home.png" alt="homeIcon" />
                </a>
                <a href="#aboutMe">
                    <img src="./img/icon/aboutMe.png" alt="aboutMeIcon" />
                </a>
                <a href="#portofolio">
                    <img src="./img/icon/portofolio.png" alt="protofolioIcon" />
                </a>
                <a href="#contactUs">
                    <img src="./img/icon/contactUs.png" alt="contactUsIcon" />
                </a>
            </div>
        )  
    } 
}