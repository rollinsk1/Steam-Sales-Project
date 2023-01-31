import React from "react";
import logo from '../draven_mona_lisa.jpeg'


class HelloWorld extends React.Component{
    render() {
        return(
            <div className="font-mono w-full">
                <h1> Hello {this.props.name}</h1>
                <img src={logo} alt="logo" />
            </div>
        )
    }
}

export default HelloWorld;