import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';


class ContactForm extends Component{

 static propTypes = { onSubmit: PropTypes.func.isRequired };

    state={
    name: '',
    number: '',
    id: '',
    }

handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, } = this.state;  
    this.props.onSubmit({ id:nanoid(8), name, number });
    
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

    render(){
        const {name, number,} = this.state;
        return(<form onSubmit={this.handleSubmit}>
            <label>
                Name
<input
  className={s.inputStyles}
  type="text"
  name="name"
  value={name}
  onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
</label>
 <label>
          Number
          <input
          className={s.inputStyles}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={s.buttonDelete}>
          Add contact
        </button>
</form>

        )
    }
}

export default ContactForm