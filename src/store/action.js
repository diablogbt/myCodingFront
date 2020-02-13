import Axios from 'axios';

export const getAll = () => {
    return dispatch => {
        let url = 'http://localhost:8080/all_tracks';
        Axios.get(url).then(
            resp => {
                dispatch({type: 'get_all', payload: resp.data});
                console.log('fetch all');
                console.log(resp.data);
            }
        ).catch(
            err => {console.log(err);}
        )
    }
}

export const getCurrent = (id) => {
    return dispatch => {
        let url = 'http://localhost:8080/track?id='+id;
        Axios.post(url).then(
            resp => {
                dispatch({type: 'get_current', payload: resp.data});
                console.log(`get id ${id}`);
                console.log(resp.data);
            }
        ).catch(
            err => {console.log(err);}
        )
    }
}