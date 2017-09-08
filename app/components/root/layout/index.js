import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

import style from './root-layout.styl';
import RootHeader from '../header';
import RootFooter from '../footer';
import Main from 'components/main';
import UiPreloader from 'components/ui/preloader';
import RootAside from '../aside';

import { getPrimaryData } from './actions';

class RootLayout extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getPrimaryData();
    }
    render(){
        const {state,currentState} = this.props;
        const loading = state.isFetching || currentState.isFirstFetch;
        return (
            <div className={style.container}>
                <RootAside />
                <div className={classnames(
                    style.layout,
                    {
                        [style.isLoading]:loading,
                        [style.isLoaded]:!loading
                    })}>
                    <header className={style.header}>
                        <RootHeader company={this.props.company} />
                    </header>
                    <main className={style.main}>
                        <Main></Main>
                    </main>
                    <footer className={style.footer}>
                        <RootFooter company={this.props.company} />
                    </footer>
                </div>
                {loading?(<UiPreloader fixed={true} />):null}
            </div>
        );
    }
}

export default withRouter(connect(
    state => {
        return state;
    },
    dispatch => ({
        getPrimaryData:() => {
            return dispatch(getPrimaryData());
        }
    })
)(RootLayout));