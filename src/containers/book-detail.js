import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return <h3>Select a book</h3>
        }
        return(
            <div>
                <h3>Selected book:</h3>
                <div>{this.props.book.title}</div>
                <h3>
                    Pages:
                </h3>
                <div>{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        book: state.activeBook
    };
}
export default connect(mapStateToProps)(BookDetail);

