import React from "react"

export class Navbar extends React.Component {
    render () {
        return (
    <nav>
        <ul>
            <li onClick={this.setState({home: 'main'})}>Home</li>
        <li>Cat Website</li></ul>
    </nav>
        )
    }
}
export default Navbar