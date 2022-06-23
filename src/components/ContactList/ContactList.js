import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { nanoid } from 'nanoid';

const ContactList = ({contacts, onDeleteContact }) => {
    return(
       
        <ul className="contactsList">
           {contacts.map(({id, name, number}) => (<ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />))}
         </ul>
        )
    
    
}

ContactList.propTypes={
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;