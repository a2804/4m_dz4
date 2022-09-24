import React,{Component} from "react";

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputVal_1: ""};
    }

    handleInput1Change = (e) => {
        this.setState({inputVal_1: e.target.value});
    }

    cancelCourse = () => {
        this.setState({inputVal_1: ""});
    }

    render() {
        return (
            <form>
                <input value={this.state.inputVal_1} onChange={this.handleInput1Change} />
                <input type="submit" name="saveCourse" value="Create" />
                <input type="button" name="cancelCourse" value="cancel" onClick={this.cancelCourse} />
            </form>
        );
    }
}

export default Example;