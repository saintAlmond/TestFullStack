import React, { Component } from "react";
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios/index';

export default class EditBundle extends Component {

    constructor(props) {
        super(props)

        this.onChangeBundleName = this.onChangeBundleName.bind(this);
        this.onChangeBundleDescription = this.onChangeBundleDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/bundles/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    description: res.data.description
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeBundleName(e) {
        this.setState({ name: e.target.value })
    }


    onChangeBundleDescription(e) {
        this.setState({ description: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const bundleObject = {
            name: this.state.name,
            description: this.state.description
        };

        axios.put('http://localhost:8000/api/bundles/' + this.props.match.params.id, bundleObject)
            .then((res) => {
                console.log(res.data)
                console.log('Bundle successfully updated')
            }).catch((error) => {
            console.log(error)
        })

        // Redirect to Bundle List
        this.props.history.push('/bundle-listing')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeBundleName} />
        </Form.Group>


        <Form.Group controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={this.state.description} onChange={this.onChangeBundleDescription} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
            Update Bundle
        </Button>
        </Form>
        </div>);
    }
}
