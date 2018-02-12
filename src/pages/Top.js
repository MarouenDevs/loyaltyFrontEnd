import React, {Component} from 'react';
import Legend from "../components/Legend";
import Panel from "react-bootstrap/es/Panel";
import Table from "react-bootstrap/es/Table";
import PageHeader from "react-bootstrap/es/PageHeader";
import riderApi from "../api/Rider";


class Top extends Component {

    constructor(props) {
        super(props);

        this.state = {
            riders: [],
            mapStatus: {
                'bronze': {className: "label label-default", nextState: 'silver'},
                'silver': {className: "label label-primary", nextstate: 'gold'},
                'gold': {className: "label label-warning", nextstate: 'platinuim'},
                'platinuim': {className: "label label-info", nextstate: 'platinuim'}


            }

        };
        this.initRiders();
        this.registerSocket(this.state, this);
    }
    registerSocket(state, cb) {

        this.props.socket.on('rider', function (data) {
            cb.initRiders();
        });
    }
    initRiders() {

        let self = this;
        riderApi().top_ten().then(function (result) {

            self.setState({
                riders: result.data
            });
        }).catch(function (e) {
            console.log(e);
            alert('web service non disponible');
        })


    }

    render() {

        return (
            <div className="row">
                <PageHeader>
                    Top riders
                    <small>Best riders 10 listing real time</small>
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

                            {this.state.riders ?
                                (this.state.riders.map((rider) =>
                                    ( <tr key={rider.rider_id}>
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
                                    </tr>))) : ''}


                            </tbody>

                        </Table>

                    </Panel>
                </div>
            </div>
        );
    }
}

export default Top;
