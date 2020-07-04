import React from 'react';


class DisplayForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            "name": "",
            "email": ""
        }
    }

    handleChange = (e) => {
        //alert(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            name: this.state.name,
            email: this.state.email
        }
        this.props.onFormSubmit(form);
        this.setState({
            name: '',
            email: ''
        })
    }

    render = function(){

        return(
            <div>
                <br></br>
                <h4>Enter your Details Here!</h4>
                <form class="employee-form">
                    <label for="name">Name : </label>
                    <input type="text" name="name" id="name" placeholder="Enter your Name" value={this.state.name} onChange={e => this.handleChange(e)} />
                    <br></br>
                    <label for="email">Email : </label>
                    <input type="text" name="email" id="email" placeholder="Enter your Email" value={this.state.email} onChange={e => this.handleChange(e)} />
                    <br></br>
                    <input type="submit" value="Submit" onClick={(e) => this.onSubmit(e)} />
                </form>
            </div>
        );
    }
}

export default DisplayForm;