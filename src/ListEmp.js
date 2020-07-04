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
                <table class="table table-striped table-dark table-bordered table-hover">
                    <thead class="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
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