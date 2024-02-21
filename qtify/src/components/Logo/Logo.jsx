import styles from './Logo.module.css';
import logoImage from '../../assets/images/logo.PNG'; 

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="QtifyLogo" style={{ width: '7em', height: '3.5em' }}/>
        </div>
    );
}
