import { createClient } from '../services/prismicio'
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'
import { FiCalendar, FiUser } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import Link from 'next/link'

type Post = {
  uid?: string
  first_publication_date: string
  data: {
    title: string
    subtitle: string
    author: string
  }
}

interface PostPagination {
  next_page: string
  results: Post[]
}

interface HomeProps {
  postsPagination: PostPagination
}

export const Home = ({ postsPagination }: HomeProps) => {
  const [posts, setPosts] = useState<Post[]>(postsPagination.results)
  const [page, setPage] = useState(postsPagination.next_page)
  useEffect(() => {
    const loadButton = document.getElementById('loadButton')
    if (page === null) {
      if (loadButton) {
        loadButton.style.display = 'none'
      }
    }
  }, [page])

  async function handleNextPage() {
    const request: PostPagination = await fetch(page).then(response =>
      response.json()
    )
    const newPost = request.results.map((post: Post) => {
      return {
        uid: post.uid,
        first_publication_date: new Date(
          post.first_publication_date
        ).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),

        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author
        }
      }
    })
    setPage(request.next_page)
    setPosts([...posts, ...newPost])
  }

  return (
    <>
      <Head>
        <title>Space Traveling</title>
      </Head>
      <main className={styles.container}>
        <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        {posts.map(post => {
          return (
            <div key={post.uid} className={styles.content}>
              <Link href={`/posts/${post.uid}`}>
                <a>
                  <h1>{post.data.title}</h1>
                </a>
              </Link>
              <p>{post.data.subtitle}</p>
              <div className={styles.info}>
                <FiCalendar size={20} />
                <time>{post.first_publication_date}</time>
                <FiUser size={20} />
                <span>{post.data.author}</span>
              </div>
            </div>
          )
        })}

        <button id="loadButton" onClick={handleNextPage}>
          Carregar mais posts
        </button>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async req => {
  const client = createClient()

  const request = await client.getByType('posts', {
    pageSize: 1
  })

  const results = request.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: new Date(
        post.first_publication_date
      ).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),

      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author
      }
    }
  })

  const postsPagination = {
    next_page: request.next_page,
    results: results
  }
  return {
    props: { postsPagination } // Will be passed to the page component as props
  }
}
export default Home
