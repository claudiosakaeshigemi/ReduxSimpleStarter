export function selectBook(book){
    //SelectBook is ActionCreator, it needs to return an action,
    // an object with a type property

    return {
        type: 'BOOK_SELECTED',
        payload: book 
    };
}