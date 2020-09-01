import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios/index';

export default class BundleTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteBundle = this.deleteBuendle.bind(this);
    }

    deleteBundle() {
        axios.delete('http://localhost:8000/api/bundles/' + this.props.obj.id)
            .then((res) => {
                console.log('Bundle removed deleted!')
            }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <tr>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.description}</td>
            <td>
            <Link className="edit-link" to={"/edit-bundle/" + this.props.obj.id}>
            <Button size="sm" variant="info">Edit</Button>
            </Link>
            <Button onClick={this.deleteBundle} size="sm" variant="danger">Delete</Button>
            </td>
            </tr>
    );
    }
}
