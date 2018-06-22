import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'

class IdeasContainer extends Component {

    state = {
        ideas: []
    }

    render() {
        return (
            <div>
                <h1>Ideas</h1>
                <button className="newIdeaButton"
                        onClick={this.addNewIdea} >
                    New Idea
                </button>
                {this.state.ideas.map((idea) => {
                    return (<Idea idea={idea} key={idea.id} />)
                })}
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/ideas.json')
            .then(response => {
                this.setState({ideas: response.data})
            })
            .catch(error => console.log(error))
    }

    addNewIdea = () => {
        axios.post(
            'http://localhost:3001/api/v1/ideas',
            { idea:
                    {
                        title: '',
                        body: ''
                    }
            }
        )
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
    }

}

export default IdeasContainer