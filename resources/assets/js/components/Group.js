import React, { Component } from 'react';

/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
// const Group = ({group}) => {
//
//     const divStyle = {
//         /*code omitted for brevity */
//     }
//
//     //if the props product is null, return Product doesn't exist
//     if(!group) {
//         return(<div style={divStyle}>  Group doesn't exist </div>);
//     }
//
//     //Else, display the product data
//     return(
//         <div style={divStyle}>
//             <h2> {group.group_name} </h2>
//             <p> {group.group_desc} </p>
//         </div>
//     )
// }

class Group extends Component {
    constructor(props){
        super(props);
        this.state = {
            group: props
        }
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