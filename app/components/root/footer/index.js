import React from 'react';

import style from './root-footer.styl';

import NavListHorizontal from 'components/nav/list-horizontal';

class RootFooter extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {site_info} = this.props.company;
        return (
            <div className={style.footer}>
                <NavListHorizontal nav={this.props.nav} />
                <div>{site_info}</div>
            </div>
        );
    }
}

export default RootFooter;