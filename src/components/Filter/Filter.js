import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

const Filter = ({ filterChanges }) =>
{
    return(
        <label>
            Find contact by name<input type="text" onChange={ filterChanges } className={s.inputStyles}/>
        </label>

    )
}

Filter.propTypes={
    filterChanges: PropTypes.func.isRequired
}

export default Filter