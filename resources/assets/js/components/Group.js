import React, { Component } from 'react';

class Group extends Component {
    constructor(props){
        super(props);
        this.state = {
            group: props.group
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({group:nextProps.group});
    }



    render(){
        if(!this.state.group) {
            return(<div>  Group doesn't exist </div>);
        }

        //Else, display the product data
        return(
            <div>
                <h2> {this.state.group.group_name} </h2>
                <p> {this.state.group.group_desc} </p>
            </div>
        )
    }
}





export default Group;