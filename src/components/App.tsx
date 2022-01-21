import { Component } from "react";

import '../styles/App.css';

class App extends Component {
    a: string = "d";
    render() {
        return (
            <div>
                <h1>My React App!!!{this.a}</h1>
            </div>
        );
    }
}

export default App;