import PropTypes from 'prop-types';

const ContactListItem = ({id, name, number, onDeleteContact}) =>{
    return(
        <li className="listItem">
            <p>{name} : {number}</p>
             <button onClick={() => onDeleteContact(id)} className="deleteButton">
        Delete
      </button>
        </li>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactListItem