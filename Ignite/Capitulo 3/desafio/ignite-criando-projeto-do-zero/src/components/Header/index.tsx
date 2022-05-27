import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <a href="/">
          <img src="/images/logo.svg" alt="" />
        </a>
      </div>
    </header>
  )
}
