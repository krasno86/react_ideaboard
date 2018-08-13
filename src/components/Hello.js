import React from 'react'

class Hello extends React.Component {
    state = { value: 'Hello, !' };
    handleChange = this.handleChange.bind(this);

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return  <div className='Hello'>
            <section><h1>Hello, {this.props.title}</h1>
                <h3>{this.props.name}</h3>
                <p>{this.props.text}</p>
                <h3>Input</h3>
                <label>Enter some markdown</label><br/>
                <textarea
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <h3>Output</h3>
                <p>{this.state.value}</p>
    </section>
        </div>
    }
}

Hello.defaultProps = {title: "Заголовок", name: "React", text: "egw4gweg w4qgwegewghw4h"};

export default Hello