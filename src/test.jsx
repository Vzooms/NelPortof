import React from 'react'

export default class test extends React.Component {
    state = {now : 0}

    nambah = () =>{
        this.setState({now : this.state.now + 1})
    }

    render (){
        return(
            <div>
                <button onClick={this.nambah}>nambah</button>
                <div>{this.state.now}</div>
            </div>
        )
    }
}