import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { getPage } from 'components/page/actions/page';

//import PageDefault from '../default';

class PageProvider extends React.Component{
    constructor(props){
        super(props);
        this.page = null;
    }
    getPage(){
        this.props.getPage('absoute');
    }
    componentWillMount(){
        this.getPage();
    }
    render(){
        return (
            <PageDefault page={this.page}/>
        );
    }
}

export default withRouter(connect(
    (state,ownProps) => {
        const {slug} = ownProps.match.params;
        const {list} = state.pages;
        const newState = {page:list.find(p=>p.slug===slug)};
        return newState;
    },
    dispatch  => ({
        getPage: (slug) => {
            dispatch(getPage(slug));
        }
    })
)(PageProvider));