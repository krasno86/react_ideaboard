import React, { Component } from 'react'
import axios from 'axios'
import Idea from './Idea'
import update from 'immutability-helper'
import IdeaForm from './IdeaForm'

class IdeasContainer extends Component {

    state = {
        ideas: [],
        editingIdeaId: null
    }

    render() {
        return (
            <div>
                <h1>Ideas</h1>
                <button className="newIdeaButton"
                        onClick={this.addNewIdea} >
                    New Idea
                </button><br/>
                {this.state.ideas.map((idea) => {
                    if(this.state.editingIdeaId === idea.id) {
                        return(<IdeaForm idea={idea} key={idea.id}
                                         updateIdea={this.updateIdea} />)
                    } else {
                        return (<Idea idea={idea} key={idea.id} />)
                    }
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
                const ideas = update(this.state.ideas, {
                    $splice: [[0, 0, response.data]]
                })
                this.setState({
                    ideas: ideas,
                    editingIdeaId: response.data.id
                })
            })
            .catch(error => console.log(error))
    }

    updateIdea = (idea) => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
        const ideas = update(this.state.ideas, {
            [ideaIndex]: { $set: idea }
        })
        this.setState({ideas: ideas})
    }
}

export default IdeasContainer