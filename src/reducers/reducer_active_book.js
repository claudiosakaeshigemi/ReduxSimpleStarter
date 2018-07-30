//state argument is not application state, only the state
//this reducer is responsible for

export default function( state = null, action ) {
    switch(action.tipe) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}