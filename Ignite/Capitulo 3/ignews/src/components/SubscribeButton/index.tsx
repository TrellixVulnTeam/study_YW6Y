import { useSession, signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const session = useSession()
  const router = useRouter()
  async function handleSubscribe() {
    if (!session.data) {
      signIn('github')
      return
    }

    if (session.data?.activeSubscription) {
      router.push('/posts')
      return
    }
    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      console.log(err)
    }
    //checkout session
  }
  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      <span>Subscribe now </span>
    </button>
  )
}
