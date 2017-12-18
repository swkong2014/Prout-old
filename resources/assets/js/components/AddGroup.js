import React, { Component } from 'react';

class AddGroup extends Component {

    constructor(props) {
        super(props);
        /* Initialize the state. */
        this.state = {
            newGroup: {
                group_name: '',
                group_desc: '',
                category:''
            }
        }

        //Boilerplate code for binding methods with `this`
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /* This method dynamically accepts inputs and stores it in the state */
    handleInput(key, e) {

        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.newGroup);
        state[key] = e.target.value;
        this.setState({newGroup: state });
    }
    /* This method is invoked when submit button is pressed */
    handleSubmit(e) {
        //preventDefault prevents page reload
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.onAdd(this.state.newGroup);
    }

    render() {
        const divStyle = {
            /*Code omitted for brevity */
        }

        return(
            <div>
                <h2> Create new Group </h2>
                <div style={divStyle}>
                    { /*when Submit button is pressed, the control is passed to
                     *handleSubmit method
                     */ }
                    <form onSubmit={this.handleSubmit}>
                        <div className={"row"}>

                            <div className={"col-lg-3"}>
                                <label> Group name:
                                </label>
                            </div>

                            <div className={"col-lg-6"}>
                                <input type="text" onChange={(e)=>this.handleInput('group_name',e)} />
                            </div>
                        </div>

                        <div className={"row"}>

                            <div className={"col-lg-3"}>
                                <label> Description:
                                </label>
                            </div>

                            <div className={"col-lg-6"}>
                                <textarea type="text" onChange={(e)=>this.handleInput('group_desc',e)} />
                            </div>
                        </div>

                        <div className={"row"}>

                            <div className={"col-lg-3"}>
                                <label> Category:
                                </label>
                            </div>

                            <div className={"col-lg-6"}>
                                <input type="text" onChange={(e)=>this.handleInput('category',e)} />
                            </div>
                        </div>

                        { /* Input fields for Price and availability omitted for brevity */}
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>)
    }
}

export default AddGroup;