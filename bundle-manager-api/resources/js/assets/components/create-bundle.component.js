import React, { Component } from "react";
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios/index'
import BundlesList from './bundle-listing.component';
import Swal from 'sweetalert2/sweetalert2';


export default class CreateBundle extends Component {
    constructor(props) {
        super(props)

        // Setting up functions
        this.onChangeBundleName = this.onChangeBundleName.bind(this);
        this.onChangeBundleDescription = this.onChangeBundleDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            description: ''
        }
    }

    onChangeBundleName(e) {
        this.setState({name: e.target.value})
    }

    onChangeBundleDescription(e) {
        this.setState({description: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()
        const bundle = {
            name: this.state.name,
            description: this.state.description
        };
        axios.post('http://localhost:8000/api/bundle/', bundle)
            .then(res => console.log(res.data));
        // console.log(`Bundle successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Description: ${this.state.description}`);
        Swal.fire(
            'Good job!',
            'Bundle Added Successfully',
            'success'
        )

        this.setState({name: '', description: ''})
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
            <Row>
                <Col>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeBundleName}/>
                    </Form.Group>

                </Col>

            </Row>


        <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeBundleDescription}/>
        </Form.Group>


        <Button variant="primary" size="lg" block="block" type="submit">
            Add Bundle
        </Button>
        </Form>
        <br></br>
        <br></br>

        <BundlesList> </BundlesList>
        </div>);
    }
}

