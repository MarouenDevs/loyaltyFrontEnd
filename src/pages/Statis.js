import React, {Component} from 'react';
import Legend from "../components/Legend";

import PageHeader from "react-bootstrap/es/PageHeader";
import riderApi from "../api/Rider";

import Alert from "react-bootstrap/es/Alert";


class Statis extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stats: {},
            mapStatus: {
                'bronze': {className: "danger", nextState: 'silver', cle: 1},
                'silver': {className: "success", nextstate: 'gold', cle: 2},
                'gold': {className: "warning", nextstate: 'platinuim', cle: 3},
                'platinuim': {className: "info", nextstate: 'platinuim', cle: 4}

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
        Promise.all([riderApi().stats('bronze'),
            riderApi().stats('gold'), riderApi().stats('platinuim'), riderApi().stats('silver')]).then((values) => {
            let stats = self.state.stats;
            values.map((value) => {
                stats[value.data.state] = value.data;
            });

            self.setState({stats: stats});


        }).catch((errors) => {

            alert('error serveur');
        });


    }

    render() {

        return (
            <div className="row">
                <PageHeader>
                    Statistics
                    <small>real time data</small>
                </PageHeader>

                <div className="col-md-2">
                    <Legend/>
                </div>
                <div className="col-md-10 statis">
                    {Object.keys(this.state.mapStatus).map((key) =>
                        (<div className="col-md-3" key={this.state.mapStatus[key].cle}>
                            <Alert bsStyle={'' + this.state.mapStatus[key].className}>
                                <strong>{key} riders! :</strong>

                                <strong>Nb riders:{this.state.stats[key] ? this.state.stats[key].nbRiders : 0} </strong>
                                <strong>Max loaylity points:{this.state.stats[key] ? this.state.stats[key].maxPoints : 0} </strong>
                            </Alert>
                        </div>))

                    }


                </div>
            </div>);

    }

}

export default Statis;
