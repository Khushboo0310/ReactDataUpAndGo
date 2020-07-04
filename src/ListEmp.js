import React from 'react';

class ListEmployee extends React.Component{

    constructor(props){
        super(props);

        this.employeeNodes = this.employeeNodes.bind(this);
    }

    employeeNodes = function () {
        //console.log("My data : "+JSON.stringify(this.props));
        return (
            <Employee
                data={this.props.data}
            />
        );
    };

    render = function(){

        return(
            <div class="EmpList">
                {this.employeeNodes()}
            </div>
        );
    }
}

class Employee extends React.Component{

    constructor(props){
        super(props);
        this.getRowsData = this.getRowsData.bind(this);
    }

    getRowsData = function () {
        var items = this.props.data;
        return items.map((row, index) => {
            return <tr key={index}><RenderRow key={index} data={row} /></tr>
        })
    }

    render = function(){

        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                        </tr> 
                    </thead>
                    <tbody>{this.getRowsData()}</tbody>
                </table>
            </div>
        );
    }
}

const RenderRow = (props) => {
    var Keys = ["id","name","email"];
    return Keys.map((key, index) => {
        return <td key={props.data[key]}>{props.data[key]}</td>
    })
}

export default ListEmployee;