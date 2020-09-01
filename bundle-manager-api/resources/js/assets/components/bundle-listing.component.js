import React, { Component } from "react";
import axios from 'axios/index';
import Table from 'react-bootstrap/esm/Table';
import BundleTableRows from './BundleTableRows';


export default class BundleList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bundles: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/bundles/')
            .then(res => {
                this.setState({
                    bundles: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.bundles.map((res, i) => {
            return <BundleTableRows obj={res} key={i} />;
        });
    }


    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
        <thead>
        <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {this.DataTable()}
        </tbody>
        </Table>
        </div>);
    }
}
