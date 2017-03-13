export function selectBook(book){
    //SelectBook needs to return an action
    return{
        type: "BOOK_SELECTED",
        payload: book
    };
}
