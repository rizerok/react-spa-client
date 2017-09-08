import React from 'react';

import style from './about.styl';

import PageProvider from 'components/page/provider';
//console.log('PageProvider',PageProvider);

class About extends PageProvider{
    constructor(){
        super();
    }
    // render(){
    //     return (
    //         <div>About</div>
    //     );
    // }
}

export default About;