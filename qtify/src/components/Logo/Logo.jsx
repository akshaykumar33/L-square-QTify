import styles from './Logo.module.css';
import logoImage from '../../assets/images/logo.PNG'; // Adjusted path

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="Qtify"/>
        </div>
    );
}

