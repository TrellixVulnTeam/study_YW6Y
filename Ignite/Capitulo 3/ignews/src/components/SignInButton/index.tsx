import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
  const session = useSession()

  return session.data ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      <span>{session.data.user.name}</span>
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => {
          signOut()
        }}
      />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {
        signIn('github')
      }}
    >
      <FaGithub color="#eba417" />
      <span>Sign in With Github</span>
    </button>
  )
}
