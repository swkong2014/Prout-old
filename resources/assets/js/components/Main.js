import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Product from "./Product.js";
import AddGroup from "./AddGroup.js";
import Group from "./Group";

/* Main Component */
class Main extends Component {

    constructor() {

        super();

        /* currentProduct keeps track of the product currently
         * displayed */
        this.state = {
            groups: [],
            currentGroup: null,
            currentUser: 1,
            joinedGroups: []
        }

        this.handleAddGroup = this.handleAddGroup.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleJoinGroup = this.handleJoinGroup.bind(this);
        this.handleLeaveGroup = this.handleLeaveGroup.bind(this);

    }

    componentDidMount() {
        fetch('/api/groups')
            .then(response => {
                return response.json();
            })
            .then(groups => {
                //Fetched product is stored in the state
                this.setState({ groups });
            });
    }

    renderGroups() {
        return this.state.groups.map(group => {
            return (
                //this.handleClick() method is invoked onClick.
                <li onClick={
                    () =>this.handleClick(group)} key={group.id} >
                    { group.group_name }
                </li>
            );
        })
    }

    handleClick(group) {
        //handleClick is used to set the state
        this.setState({currentGroup:group});
    }

    handleAddGroup(group) {
        // product.price = Number(product.price);
        /*Fetch API for post request */
        fetch( 'api/groups/', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(group)
        })
            .then(response => {
                return response.json();
            })
            .then( data => {
                //update the state of products and currentProduct
                this.setState((prevState)=> ({
                    groups: prevState.groups.concat(data),
                    currentGroup : data
                }))
            })

    }

    handleJoinGroup(){
        var joinReq = {
            user_id: this.state.currentUser,
            group_id: this.state.currentGroup.id
        };
        // joinReq.user_id = 1;
        // joinReq.group_id = this.state.currentGroup.id;
        fetch( 'api/groups/membership/join', {
            method:'post',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(joinReq)
        })
            .then(response => {
                return response.json();
            })
            .then( data => {

                // console.log(data);
            })
    }

    handleLeaveGroup(){
        var leaveReq = {
            user_id: this.state.currentUser,
            group_id: this.state.currentGroup.id
        };
        fetch( 'api/groups/membership/leave', {
            method:'delete',
            /* headers are important*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leaveReq)
        })
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then( data => {
        //     })
    }

    handleDelete() {
        const currentGroup = this.state.currentGroup;
        fetch( 'api/groups/' + this.state.currentGroup.id,
            { method: 'delete' })
            .then(response => {
                /* Duplicate the array and filter out the item to be deleted */
                var array = this.state.groups.filter(function(item) {
                    return item !== currentGroup
                });

                this.setState({ groups: array, currentGroup: null});

            });
    }

    render() {
        return (
            /* The extra divs are for the css styles */
            <div className={"row"}>
                <div className={"col-lg-6"}>
                    <div>
                        <h3> All groups </h3>
                        <ul>
                            {/*{ this.renderProducts() }*/}

                            {this.renderGroups() }
                        </ul>
                    </div>
                </div>
                <div className={"col-lg-6"}>
                    <AddGroup onAdd={this.handleAddGroup} />
                    <br/>

                    <button onClick={this.handleDelete}>Delete group</button>
                    <br/>
                    <br/>

                    <button onClick={this.handleJoinGroup}>Join group</button>
                    <button onClick={this.handleLeaveGroup}>Leave group</button>
                    <Group group={this.state.currentGroup} />

                </div>
            </div>
        );
    }
}


export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}