import React from "react";
import Contact from './Contact'
import contacts from './fixtures'
import './style.css'

class ContactsList extends React.Component {
    state = {
        displayedContacts: contacts
    };

    handleSearch = this.handleSearch.bind(this);

    handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedContacts = contacts.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });
        this.setState({ displayedContacts: displayedContacts });
    }

    render() {
        return (
            <div className="contacts">
                <input type="text" className="search-field" onChange={this.handleSearch} />
                <ul className="contacts-list">
                    {
                        this.state.displayedContacts.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                phoneNumber={el.phoneNumber}
                                image={el.image}
                                email={el.email}
                            />;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ContactsList
