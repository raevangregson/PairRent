const INITIAL_STATE = {
    data: [],
    isLoading: true,
    matches: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_PROFILES":
            return Object.assign({}, state, {
                isLoading: true
            });
        case "RECEIVE_PROFILES":

            return Object.assign({}, state, {
                data: action.data,
                isLoading: false
            });
        // case "MAKE_MATCHES":
        //     var madeMatches = matchLogic(data, action.searchData);
        //     // return (
        //     //
        //     // );
        default:
            return state;
    }
}

// function matchLogic(data, searchData) {
//     // return (
//     //
//     // )
// }
