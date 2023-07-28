import React from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/home/index.js'
import List from './pages/list/index.js'


class AppRouter extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return (<BrowserRouter>
            <div>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/Home' exact component={Home}/>
                    <Route path='/List' component={List}/>
                </Switch>
            </div>

        </BrowserRouter>)
    }
}
export default AppRouter;