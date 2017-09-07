import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import style from './nav-list-vertical.styl';

class NavListVertical extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let navList = null;
        if(this.props.list){
            navList = <ul className={style}>
                {this.props.list.map((n,i)=>(
                    <li key={i}>
                        <NavLink className={style.listItem}
                                 to={n.url}
                                 exact={n.url==='/'}
                                 activeClassName={classnames({
                                    [style.isActive]:this.props.active
                                 })}>
                            {n.title}
                        </NavLink>
                    </li>
                ))}
            </ul>;
        }

        return (

            <nav className={style.navDropDownList}>
                {navList}
            </nav>

        );
    }
}

export default connect(
    ({nav:{list}}) => ({list})
)(NavListVertical);