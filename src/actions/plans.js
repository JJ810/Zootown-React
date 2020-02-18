import {graphql} from '../api'
import { createAction } from './utils';
import { message } from 'antd';
import { gql } from "apollo-boost";


export const getPlans = (_gql, succ) => dispatch => {
    return graphql.query({query: gql`${_gql}`}).then(res => {
        if (res.data) {
            succ();
            return dispatch(
                createAction("GET_PLANS", res.data)
            )
        } else {
            throw new Error('Get mongopay user id failed')
        }
    }).catch(e=>{
        message.error("Incorrect information !")
    })
}
