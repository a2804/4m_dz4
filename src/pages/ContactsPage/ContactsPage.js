import React, {Component} from 'react';
import ClearValue from "../../components/clearValue/ClearValue";

class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {input: ""}
    }

    changeInput = (a) => {
        console.log(a.target.value)
        this.setState({input: a.target.value})
    }

    addValue = () => {
        console.log(this.state);
    }

    pushClear = () => {
        this.setState({input: ""});
    }

    render() {
        return (
            <div>
                {/*<input type="text" onChange={this.changeInput}/>*/}
                {/*<button onClick={this.addValue}>add</button>*/}
                {/*<button onClick={this.pushClear}>clear</button>*/}
                <input value={this.state.input} onChange={this.changeInput} />
                <input type="submit"  value="add" onClick={this.pushClear} onClick={this.addValue} />
                <input type="button"  value="clear" onClick={this.pushClear} />
            </div>
        );
    }
}

export default ContactsPage;