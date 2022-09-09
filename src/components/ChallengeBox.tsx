import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Earn 400 xp</header>
          <main>
            <img src='icons/body.svg' />
            <strong>New challenge</strong>
            <p>Get up and go for a 3 minute walk</p>
          </main>
          <footer>
            <button type='button' className={styles.challengeFailedButton}>
              I failed
            </button>
            <button type='button' className={styles.challengeSucceededButton}>
              I finished
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>End a cycle to be challenged</strong>
          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            Level Up completing challenges
          </p>
        </div>
      )}
    </div>
  );
}
