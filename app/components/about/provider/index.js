import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

import { getPage } from '../actions/page';

import PageDefault from '../default';

class PageProvider extends React.Component{
    constructor(props){
        super(props);
        this.page = null;
        this.slug = props.match.params.slug;
    }
    getPage(){
        this.props.getPage(this.slug);
    }
    componentWillMount(){
        this.getPage();
    }
    componentWillReceiveProps({page,match:{params:{slug}}}){
        if(this.slug !== slug){
            this.slug = slug;
            this.getPage();
        }else{
            this.slug = slug;
        }
        this.page = page;
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