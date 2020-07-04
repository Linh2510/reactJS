import React, { Component } from 'react'
const pStyle ={
    color: 'red'
}
export default class ErrorForm extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        let formError = this.props.errorform;
        return (
            <div>
                {
                 Object.keys(formError).map((fielName,i) => {
                        if(formError[fielName].length > 0){
                            return (
                            <p style={pStyle} key={i}>{formError[fielName]}</p>
                            )
                        }
                        else {   
                            return "";
                        }
                        
                    })
                }
            </div>
        )
    }
}
