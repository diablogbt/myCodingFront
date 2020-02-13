const initialState = {
    tracks: null,
    currentTrack: null
}

const updateAll = (state, payload) => {
    let newState = {...state};
    newState['tracks'] = {};
    for(let id in payload){
        newState['tracks'][id] = {};
        for(let prop in payload[id]){
            newState['tracks'][id][prop] = payload[id][prop];
        }
    }
    return newState;
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case 'get_all':
        return updateAll(state,payload);

    case 'get_current':
        console.log(payload);
        return {...state, currentTrack:payload};

    default:
        return state;
    }
}