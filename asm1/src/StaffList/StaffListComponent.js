import { STAFFS } from "../shared/staffs";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import React, { Component } from "react";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staffs) {
        this.setState({ selectedStaff: staffs })
    }

    renderStaff(staffs) {
        if (staffs != null) {
            return (
                <CardBody>
                    <CardTitle>{staffs.name}</CardTitle>
                    <CardText>{staffs.department}</CardText>
                </CardBody>
            )
        } else {
            <div></div>
        }
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