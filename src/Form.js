import React from 'react';

class QueryForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    getInitialState = function () {
        //this will hold all the data being read and posted to the file
        return { data: [] };
    }
    /*
    loadDataFromServer = function(){

        fetch(this.props.url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ data: result });
                    console.log(result);
                },
                (error) => {
                    console.log(this.props.url, error.toString());
                }
            )
    }
    */
    componentDidMount = function () {
        //this.loadDataFromServer();
        setInterval(this.loadDataFromServer, this.props.pollInterval);
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