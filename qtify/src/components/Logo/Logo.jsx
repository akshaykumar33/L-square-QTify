import styles from './Logo.module.css';
import logoImage from '../../assets/images/logo.PNG'; 

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logoImage} alt="QtifyLogo" style={{ width: '4.2em', height: '2.6em' }}/>
        </div>
    );
}
