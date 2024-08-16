import styles from "../Card.module.css";

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

export default Card;
