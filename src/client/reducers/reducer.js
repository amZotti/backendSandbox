
function getInitialState() {
    return {
        count: 0
    };
}

function increment(state, action) {
    state.count++;
    return state.count;
}

function decrement(state, action) {
    state.count--;
    return state.count;
}

module.exports = function(state, action) {
    let intState = state;

    if (!intState) {
        intState = getInitialState();
    }

    switch(action.type) {
        case 'INCREMENT':
            return increment(intState, action);
        case 'DECREMENT':
            return decrement(intState, action);
        default:
            return intState;
    }
}
