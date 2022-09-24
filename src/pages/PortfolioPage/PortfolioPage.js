import React, {Component} from 'react';
import Works from "../../components/works/Works";

class PortfolioPage extends Component {

    constructor(props) {
        super(props);
        this.state = {works: []}
    }

    changeWorks = () => {
        this.setState({works: ["Work1", "Work2"]})
    }

    render() {
        return (
            <div>
                <button onClick={this.changeWorks}>get</button>
                <Works workslist={this.state.works}/>
            </div>
        );
    }
}

export default PortfolioPage;