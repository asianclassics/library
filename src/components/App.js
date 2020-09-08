import React from 'react'
import '../assets/css/App.css'
import { Header } from './index'

import {
    SwipeableTemporaryDrawer,
    SimpleBreadcrumbs
} from '../components/material'

//import connect from '../connect'
// test Elastic connection
//connect()

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.childRef = React.createRef()
    }

    componentDidMount() {
        //this.childRef.current.focus()
    }

    render() {
        return (
            <div className='App'>
                <SwipeableTemporaryDrawer ref={this.childRef} />
                <SimpleBreadcrumbs />
                <Header />
            </div>
        )
    }
}
