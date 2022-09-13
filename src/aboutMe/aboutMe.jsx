import React from 'react';

const Nelsen = './img/nelsen.png';
const HTML = './img/logo/HTML.png'
const CSS = './img/logo//CSS.png'
const JS = './img/logo/JS.png'
const jquery = './img/logo/jquery.png'
const bootstrap = './img/logo/bootstrap.png'
const react = './img/logo/reactDark.png'

const AboutMe = () => {
    return (
       <section id='aboutMe'>
            <h3 className='display-1'>
                about me
            </h3>
            <main>
                <div>
                    <img id='profile' src={Nelsen} alt="" />
                </div>
                <div id='aboutMeText'>
                    <h2 className='display-2'>
                        Front end <br></br>Websites Developer
                    </h2>
                    <p className='fs-6'>
                        hi There, I am a student of Binus majoring in computer science, currently I am in semester 5.
                    </p>
                    <div id='logo'>
                        <img src={HTML} alt="" />
                        <img src={CSS} alt="" />
                        <img src={JS} alt="" />
                        <img src={jquery} alt="" />
                        <img src={bootstrap} alt="" />
                        <img src={react} alt="" />
                    </div>
                </div>
            </main>
       </section>
    )
}

export default AboutMe