import React, { Component } from 'react';

class EditGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            group: props.group
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({group:nextProps.group});
    }

    handleInput(key, e) {
        /*Duplicating and updating the state */
        var state = Object.assign({}, this.state.group);
        state[key] = e.target.value;
        this.setState({group: state });
    }

    handleSubmit(e) {
        //preventDefault prevents page reload
        e.preventDefault();
        /*A call back to the onAdd props. The current
         *state is passed as a param
         */
        this.props.handleUpdate(this.state.group);
    }

    render() {
        if(!this.state.group) {
            return(null);
        }
        return (
        <div>
            <h2> Edit Group </h2>
            <div>
                {/*when Submit button is pressed, the control is passed to
                     *handleSubmit method
                     */}
                <form onSubmit={this.handleSubmit}>
                    <div className={"row"}>

                        <div className={"col-lg-3"}>
                            <label> Group name:
                            </label>
                        </div>

                        <div className={"col-lg-6"}>
                            <input type="text" onChange={(e) => this.handleInput('group_name', e)}
                                   value={this.state.group.group_name}/>
                        </div>
                    </div>

                    <div className={"row"}>

                        <div className={"col-lg-3"}>
                            <label> Description:
                            </label>
                        </div>

                        <div className={"col-lg-6"}>
                            <textarea type="text" onChange={(e) => this.handleInput('group_desc', e)}
                                      value={this.state.group.group_desc}/>
                        </div>
                    </div>

                    <div className={"row"}>

                        <div className={"col-lg-3"}>
                            <label> Category:
                            </label>
                        </div>

                        <div className={"col-lg-6"}>
                            <input type="text" onChange={(e) => this.handleInput('category', e)}
                                   value={this.state.group.category}/>
                        </div>
                    </div>

                    {/* Input fields for Price and availability omitted for brevity */}
                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>);
    }
}

export default EditGroup;