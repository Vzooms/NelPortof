import React from 'react'
import data from './data'

export default class Portofolio extends React.Component {
    state  = {
        now : 0,
        translate: 0
    }
        
    minimize = () =>{
        const bg = document.getElementById('bg')
        const bgTemp = document.getElementById('bgTemp')
        bg.style.display = 'none'
        bgTemp.style.display = 'none'
    }

    showFull = (objek) => {
        const bg = document.getElementById('bg')
        const bgTemp = document.getElementById('bgTemp')

        this.setState({now: Number(objek.target.getAttribute('num'))},()=> {
            document.getElementById('realImage').setAttribute('src', data.Certificates[this.state.now].img)
            bg.style.display = 'flex'
            bgTemp.style.display = 'block'
        })
    }
    
    next = () =>{
        this.setState({now : Number(this.state.now) + 1
        },()=> {
            if(this.state.now > 4){
                this.setState({now : 0},()=>{
                    document.getElementById('realImage').setAttribute('src', data.Certificates[this.state.now].img)
                })
            }else
            document.getElementById('realImage').setAttribute('src', data.Certificates[this.state.now].img)
        })
    }
    
    prev = () => {
        this.setState({now : Number(this.state.now) - 1
        },()=> {
            if(this.state.now < 0){
                this.setState({now : 4},()=>{
                    document.getElementById('realImage').setAttribute('src', data.Certificates[this.state.now].img)
                })
            }else
            document.getElementById('realImage').setAttribute('src', data.Certificates[this.state.now].img)
        })
    }

    left = () => {
        var gambar = document.getElementById('experienceAll').style
        var arrowL = document.querySelector('.left').style
        var arrowR = document.querySelector('.right').style

        this.setState({translate : this.state.translate + 100},() =>{
            gambar.transform = 'translateX('+this.state.translate+'vw)'            
            if(this.state.translate === 0){
                arrowL.visibility = 'hidden'
            }else{
                arrowR.visibility = 'visible'
            }
        })
    }
    
    right = () => {
        var gambar = document.getElementById('experienceAll').style
        var arrowL = document.querySelector('.left').style
        var arrowR = document.querySelector('.right').style

        this.setState({translate : this.state.translate - 100},() =>{
            gambar.transform = 'translateX('+this.state.translate+'vw)'
            if(this.state.translate === -200){
                arrowR.visibility = 'hidden'
            }else{
                arrowL.visibility = 'visible'
            }
        })
    }

    render(){
        return(
            <section id='portofolio'>
                <div id='title'>
                    <h3 className='display-2'>portofolio</h3>
                </div>
                <div onClick={this.minimize} id='bgTemp'>
                </div>
                <div id='bg'>
                    <img onClick={this.prev} className='arrow prev' src="./img/icon/arrowBlue.png" alt="" />
                    <img id='realImage' alt="img" />
                    <img onClick={this.next} className='arrow next' src="./img/icon/arrowBlue.png" alt="" />
                </div>
                <main>
                    <div id='certificates-wrapper'>
                        <h3>Certificates</h3>
                        <div id='certificates' className='row row-cols-md-3 row-cols-xl-5 row-cols-2'>
                            {data.Certificates.map((result) => {
                                return(
                                    <img className='col' onClick={this.showFull} src={result.img} key={result.key} num={result.key} alt=""/>
                                )
                            })}
                        </div>
                    </div>
                    <h3>Experience</h3>
                    <div id='experience'>
                        <div id='experience-wrapper'>
                            <div id='experienceAll'>
                                {data.Experience.map((result) => {
                                    return(
                                        <div className='experienceText' key={result.key} >
                                            <img src={result.img} alt=""/>
                                            <div className='experienceTextJob'>
                                                <h3 className='fs-6'>{result.title}</h3>
                                                <h5 className='fs-6'>{result.location}</h5>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}