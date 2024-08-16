import React, { useState } from "react";
import styles from "../Form.module.css";
import Card from "./Card";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

   
    const emailTrimmed = email.trim();
    if (emailTrimmed.length < 3 || emailTrimmed !== email) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

    if (password.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      return;
    }

   
    setError("");
    setShowCard(true);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h2>Bienvenid@ a clases!</h2>
              <h4>Inicia sesión con tu email y password</h4>
            </div>
            <div>
              <input
                type="email"
                className={styles.formField}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className={styles.formField}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p><a href="#">Forgot Password</a></p>
              <button type="submit" className={styles.formButton}>Entrar</button>
            </div>
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <div className={styles.right}></div>
        </div>
      </form>
      {showCard && <Card email={email} password={password} />}
    </div>
  );
};

export default Form;
