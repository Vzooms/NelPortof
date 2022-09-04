import React from 'react';
import { getDatabase, ref, set} from "firebase/database";
import { initializeApp } from "firebase/app";
import FirebaseConfig from './firebaseConfig';

const app = initializeApp(FirebaseConfig);

function input(name, email, phone, comment) {
    const db = getDatabase(app);
    set(ref(db, 'massage from '+email), {
        name, email, phone, comment
    });
}
const email = './img/logo/gmail.png';
const wa = './img/logo/WA.png';
const ig = './img/logo/IG.png';

export default class ContactUs extends React.Component {
    email = () => {
        window.open('mailto: nelsen12anggara@gmail.com')
    };

    whatsApp = () => {
        window.open('http://wa.me/+6285281321705')
    }

    instagram = () => {
        window.open('https://www.instagram.com/anggara_1252/')
    }

    formHandling = (e) =>{
        e.preventDefault()

        let name = document.getElementById('name').value
        const nameHelp = document.getElementById('nameHelp')
        
        let email = document.getElementById('email').value
        const emailHelp = document.getElementById('emailHelp')

        let phone = document.getElementById('phone').value
        const phoneHelp = document.getElementById('phoneHelp')

        let comment = document.getElementById('comment').value
        const commentHelp = document.getElementById('commentHelp')

        const countWords = () => {
            return comment.toString().trim().split(' ').length
        }
        const commentWords = countWords()

        if(name.length <= 0){
            nameHelp.innerHTML = 'cannot be empty'
        }else{
            nameHelp.innerHTML = ''
        }

        if(!email.includes('@')){
            emailHelp.innerHTML = 'must include \'@\''
        }else{
            emailHelp.innerHTML = ''
        }

        if(phone.length > 14 || !phone.startsWith('08')){
            phoneHelp.innerHTML = 'must start with 08 and less than 14 digits'
        }else{
            phoneHelp.innerHTML = ''
        }

        if(commentWords < 5 || commentWords > 100){
            commentHelp.innerHTML = 'must between 5 and 100 words'
        }else{
            commentHelp.innerHTML = ''
        }
        
        if(nameHelp.innerText.length === 0
            && emailHelp.innerText.length === 0
            && phoneHelp.innerText.length === 0
            && commentHelp.innerText.length === 0){
                
            input(
                name.replaceAll('.','%'),
                email.replaceAll('.','%'),
                phone.replaceAll('.','%'),
                comment.replaceAll('.','%')
            )

            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('phone').value = ''
            document.getElementById('comment').value = ''
            document.querySelector('form button').innerText = 'success'
        }
    }

    render() {
        return(
            <section id='contactUs'>
                <div>
                    <h1 className='display-1'>
                        contact us
                    </h1>
                </div>
                <main>
                    <form className='fs-6'>
                        <div className="mb-3">
                            <div className="wrapper">
                                <label htmlFor='name' className="form-label">Name</label>
                                <div id="nameHelp" className="form-text"></div>
                            </div>
                            <input type="text" className="form-control" id="name" aria-describedby="nameHelp"></input>
                        </div>
                        <div className="mb-3">
                            <div className="wrapper">
                                <label htmlFor="email" className="form-label">Email</label>
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                        </div>
                        <div className="mb-3">
                            <div className="wrapper">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <div id="phoneHelp" className="form-text"></div>
                            </div>
                            <input type="number" className="form-control" id="phone" aria-describedby="phoneHelp"></input>
                        </div>
                        <div className="mb-3">
                            <div className="wrapper">
                                <label htmlFor="comment" className="form-label">Comment</label>
                                <div id="commentHelp" className="form-text"></div>
                            </div>
                            <textarea className="form-control" id="comment" rows="5" aria-describedby="commentHelp"></textarea>
                        </div>
                        
                        <div id='submit-wrapper'>
                            <button onClick={this.formHandling} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <div id='socialMedia-wrapper'>
                        <div className='socialMedia'>
                            <img src={email} alt="" onClick={this.email} />
                            <span className='socialMediaText' onClick={this.email}>
                                <u>Email</u>
                                Nelsen12anggara@gmail.com
                            </span>
                        </div>
                        <div className='socialMedia'>
                            <img src={wa} alt="" onClick={this.whatsApp} />
                            <span className='socialMediaText' onClick={this.whatsApp}>
                                <u>phone number</u>
                                0852-8132-1705
                            </span>
                        </div>
                        <div className='socialMedia'>
                            <img src={ig} alt="" onClick={this.instagram} />
                            <span className='socialMediaText' onClick={this.instagram}>
                                <u>Instagram</u>
                                anggara_1252
                            </span>
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}