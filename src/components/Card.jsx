import PropTypes from 'prop-types'; 
import styles from '../Card.module.css';

const Card = ({ email, password }) => {
  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <article className={styles.card}>
          <div className={styles.card__header}>
            <h3 className={styles.card__headerTitle}>Información de Usuario</h3>
          </div>
          <div className={styles.card__body}>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
          </div>
        </article>
      </div>
    </div>
  );
};


Card.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default Card;
