import React from "react";
const Arrow = './img/icon/arrowBlue.png'

export default class Home extends React.Component{
    toAboutMe = () => {
        const aboutMe = document.getElementById('aboutMe')
        window.open(aboutMe)
    }

    render(){
        return (
            <section id="home">
                <nav className="row row-cols-3">
                    <a href="#aboutMe" className="col fs-4">about me</a>
                    <a href="#portofolio" className="col fs-4">portofolio</a>
                    <a href="#contactUs" className="col fs-4">contact us</a>
                </nav>
                <main id="homeMain">
                    <h4 className="fs-6">
                        welcome to
                    </h4>
                    <h1 className="display-1">
                        NELSEN ANGGARA
                    </h1>
                    <a href="#aboutMe">
                        <button className="fs-6">
                            More About Me
                        </button>
                    </a>
                    <a href="#aboutMe">
                        <div>
                            <img src={Arrow} alt="" />
                            <img src={Arrow} alt="" />
                            <img src={Arrow} alt="" />
                        </div>
                    </a>
                </main>
            </section>
        )
    }
}
