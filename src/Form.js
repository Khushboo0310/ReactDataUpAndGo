import React from 'react';

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
                    this.setState({ data: result["items"] });
                    console.log(">>>>>>Result"+JSON.stringify(result["items"]));
                },
                (error) => {
                    console.log(this.props.url, error.toString());
                }
            )
    }
    
    componentDidMount = function () {
        this.loadDataFromServer();
        
        //setInterval(this.loadDataFromServer, this.props.pollInterval);
    }

    componentDidUpdate = function(){
        console.log("DATA : " + this.state.data[0]["id"]);
    }

    render = function(){
        return(
            <div>
                <h3>Form will be placed here!!!</h3>
            </div>
        );
    }
}

export default QueryForm;