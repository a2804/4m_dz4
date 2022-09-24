import React, {Component} from 'react';
import Text from "../../components/text/Text";

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {text: true}
    }

    changeText = () => {
        this.setState({text: !this.state.text})
    }

    render() {
        return (
            <div>
                <button onClick={this.changeText}>Click</button>
                {this.state.text && <Text/>}
            </div>
        );
    }
}

export default AboutUs;