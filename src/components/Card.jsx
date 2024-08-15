import React from "react";
import styles from "../Card.module.css";

const Card = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <article className={styles.card}>
          <a href="#" className={styles.card__link}>

            {/* Icon */}
            <div className={styles.card__icon}>
              <svg viewBox="0 0 1129 994">
                <g fill="none" fillRule="nonzero" stroke="#999" strokeWidth="41">
                  <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                  <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                  <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                </g>
              </svg>
            </div>

            {/* Media */}
            <div className={styles.card__media}>
              <svg viewBox="0 0 1129 994">
                <g fill="none" fillRule="nonzero" stroke="#F5F5F5" strokeWidth="41">
                  <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                  <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                  <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                </g>
              </svg>
            </div>

            {/* Header */}
            <div className={styles.card__header}>
              <h3 className={styles.card__headerTitle}>Soy una Card</h3>
              <p className={styles.card__headerMeta}>Lo juro!</p>
              <div className={styles.card__headerIcon}>
                <svg viewBox="0 0 28 25">
                  <path fill="#fff" d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z" />
                </svg>
              </div>
            </div>

          </a>
        </article>
      </div>
    </div>
  );
};

export default Card;
