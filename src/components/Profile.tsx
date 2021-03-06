import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {

    const { level } = useContext(ChallengesContext)

    return (
    <div className={styles.profileContainer}>
        <img src="https://avatars.githubusercontent.com/u/58779341?s=460&v=4" alt="Marcos Gonçalves"/> 
        <div> 
            <strong> Marcos Aontonio </strong>
            <p>
                <img src="icons/level.svg" alt="level"/>
                Level {level}
            </p>
        </div>
    </div>)
}
