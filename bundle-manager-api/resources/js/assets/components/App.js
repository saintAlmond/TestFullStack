import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BundlesList from './bundle-listing'
import CreateBundle from './create-bundle'
import BundleTableRows from './BundleTableRows'
import EditBundle from './edit-bundle'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
            <div>
            <Header />
            <Switch>
            <Route exact path='/' component={BundlesList} />
        <Route path='/create' component={CreateBundle} />
        </Switch>
        </div>
        </BrowserRouter>
    )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
