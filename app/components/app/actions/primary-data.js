import { getCompanyInfo } from './company-info';
import { getNav } from './nav';

export const getPrimaryData = () => dispatch =>{
    dispatch({
        type:'PRIMARY_DATA_REQUEST'
    });
    return Promise.all([
        dispatch(getCompanyInfo()),
        dispatch(getNav())
    ]).then(data=>{
        return dispatch({
            type:'PRIMARY_DATA_SUCCESS'
        });
    });
};