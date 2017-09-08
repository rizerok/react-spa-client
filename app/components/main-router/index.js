import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink
} from 'react-router-dom';

import HomeProvider from 'components/home/provider';
import AboutProvider from 'components/about/provider';

import PageRouter from 'components/page/router';

class MainRouter extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Switch>
                <Route exact path="/" component={HomeProvider} />
                <Route path="/about" component={AboutProvider} />
                <Route path="/page" component={PageRouter} />
                <Route render={()=><div>Page not found</div>} />
            </Switch>
        );
    }
}

export default MainRouter;