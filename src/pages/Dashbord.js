import React, {Component} from 'react';
import Panel from "react-bootstrap/es/Panel";
import {Table} from "react-bootstrap";
import Legend from "../components/Legend";
import Jumbotron from "react-bootstrap/es/Jumbotron";
import PageHeader from "react-bootstrap/es/PageHeader";


class Dashbord extends Component {
    constructor(props) {
        super(props);

        this.state = (JSON.parse(localStorage.getItem('state'))? JSON.parse(localStorage.getItem('state')) :{
            riders: {},
            mapStatus: {
                'bronze': {className: "label label-default", nextState: 'silver'},
                'silver': {className: "label label-primary", nextstate: 'gold'},
                'gold': {className: "label label-warning", nextstate: 'platinuim'},
                'platinuim': {className: "label label-info", nextstate: 'platinuim'}


            }
        });
        this.registerSocket(this.state, this);

    }

    registerSocket(state, cb) {

        this.props.socket.on('rider', function (data) {
            let riders = state.riders;
            riders[data.rider_id] = data;
            cb.setState(riders);
            localStorage.setItem('state', JSON.stringify(cb.state));
        });
    }

    render() {

        return (
            <div className="row">
                <PageHeader>
                    Dashbord
                    <small>Monotring  real time</small>
                </PageHeader>

                <div className="col-md-3">
                    <Legend/>
                </div>
                <div className="col-md-9">
                    <Panel>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                            <tr>

                                <th>Rider id</th>
                                <th>Rider name</th>
                                <th>Phone number</th>
                                <th>payed</th>
                                <th>NB RIDES</th>
                                <th>Loyality points</th>
                                <th>Status</th>
                                <th>next status</th>

                            </tr>
                            </thead>
                            <tbody>
                            {this.state.riders ? (Object.keys(this.state.riders).map((idRider) => {

                                let rider = this.state.riders[idRider];

                                return ( <tr key={idRider}>
                                    <td>{rider.rider_id}</td>
                                    <td>{rider.name}</td>
                                    <td>{rider.phonenumber}</td>
                                    <td>{rider.payed}</td>
                                    <td>{rider.nbRides}</td>
                                    <td>{rider.points}</td>
                                    <td><span
                                        className={rider && rider.state ? ('' + this.state.mapStatus[rider.state].className) : ''}>{rider.state}</span>
                                    </td>
                                    <td>{rider && rider.state ? this.state.mapStatus[rider.state].nextstate : ''}</td>
                                </tr>)

                            })) : <tr colspan={8}>loading.....</tr>}


                            </tbody>
                        </Table>

                    </Panel>
                </div>
            </div>
        );
    }
}

export default Dashbord;
