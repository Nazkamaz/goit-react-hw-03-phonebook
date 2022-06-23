import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';



class App extends Component{
 state = {
  contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  filter: '',
  };

addContact = newContact => {
    this.state.contacts.some(({ name }) => name === newContact.name)
      ? Notify.failure(`Contact ${newContact.name} already exists`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

   getFilterValue = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.includes(normalizeFilter)
    );
  };

render(){
  const { filter } = this.state;

return(<>
<h1>Phonebook</h1>
<ContactForm onSubmit={this.addContact}/>
<Filter filterChanges={this.getFilterValue} value={filter}/>
<h2>Contacts</h2>
<ContactList contacts={this.filteredContacts()} 
onDeleteContact = {this.deleteContact}/>
</>
)
}
}

export default App