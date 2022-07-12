import { STAFFS } from "../shared/staffs";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import React, { Component } from "react";
import dateFormat from 'dateformat'; 


class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: undefined
        }
    };

    onStaffSelect(staffs) {
        console.log(staffs, 'staffs');
        this.setState({ selectedStaff: staffs });
    };
    
    

    renderStaff(staffs) {
       
            return (
                staffs && <CardBody>
                    <CardTitle>{staffs.name}</CardTitle>
                    <CardText>Ngày sinh : {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
                    <CardText>Ngày vào công ty : {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
                    
                </CardBody>
            )
      
    }

    render() {
        const List = this.props.staffs.map((staffs) => {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card key={staffs.id} onClick={() => this.onStaffSelect(staffs)}>
                        <CardTitle>{staffs.name}</CardTitle>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                    {List}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderStaff(this.state.selectedStaff)}
                    </div>
                </div>
            </div>
        )
    }
}

export default List;
