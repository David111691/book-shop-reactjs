import { useState } from "react";
import styles from "./LoginMenu.module.css";

function LoginMenu({ closeLogin }) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className={styles.overlay}>
			<div className={styles.popup}>
				<span className={styles.close} onClick={closeLogin}>
					&times;
				</span>
				<h2 className={styles.loginLabel}>Вход</h2>
				<form className={styles.formContainer}>
					<div>
						<label for="login" className={styles.labelStyle}>
							Логин
						</label>
						<input
							className={styles.input}
							type="text"
							name="login"
							value={login}
							onChange={(e) => setLogin(e.target.value)}
							required
						/>
					</div>
					<div>
						<label for="password" className={styles.labelStyle}>
							Пароль
						</label>
						<input
							className={styles.input}
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button className={styles.loginButton} type="submit">Войти</button>
				</form>
			</div>
		</div>
	);
}

export default LoginMenu;
