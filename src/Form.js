import React from 'react';
import ListEmployee from './ListEmp';
import DisplayForm from './CreateForm';


class QueryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
        this.loadDataFromServer = this.loadDataFromServer.bind(this);
    }

    getInitialState = function () {
        //this will hold all the data being read and posted to the file
        return { data: [] };
    }
    
    loadDataFromServer = function(){

        fetch(this.props.url, {
            method : 'GET',
            headers: {
                'content-type' : 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ data: result["students"] });
                    console.log(">>>>>>Result" + JSON.stringify(result["students"]));
                },
                (error) => {
                    console.log(this.props.url, error.toString());
                }
            )
    }

    handleFormPost = function(newData){
        //alert("Form Posting" + newData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newData.name , email : newData.email })
        };
        fetch('http://localhost:9876/api/data', requestOptions)
            .then(response => response.json())
            .then(data=>console.log(data));
            
    }
    
    componentDidMount = function () {
        this.loadDataFromServer();
        //setInterval(this.loadDataFromServer, this.props.pollInterval);
    }

    render = function(){
        return(
            <div>
                <h3>List of employees</h3>
                <ListEmployee data={this.state.data} />
                <DisplayForm onFormSubmit={this.handleFormPost}/>
            </div>
        );
    }
}

export default QueryForm;