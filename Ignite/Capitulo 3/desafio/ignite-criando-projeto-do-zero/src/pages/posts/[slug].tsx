import { createClient } from '../../services/prismicio'
import { PrismicRichText } from '@prismicio/react'
import { GetStaticProps } from 'next'
import { Header } from '../../components/Header'
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import styles from './post.module.scss'
import Head from 'next/head'
import { asText } from '@prismicio/helpers'

interface Post {
  first_publication_date: string | null
  data: {
    title: string
    banner: {
      url: string
    }
    author: string
    content: {
      heading: string
      body: []
    }[]
  }
}

interface PostProps {
  post: Post
}

export default function Posts({ post }: PostProps) {
  const wordCount = post.data.content.reduce((total, contentData) => {
    total +=
      asText(contentData.body).split(' ').length +
      contentData.heading.split(' ').length
    return total
  }, 0)
  console.log(Math.ceil(wordCount / 200))
  return (
    <main className={styles.container}>
      <Head>
        <title>{post.data.title}</title>
      </Head>
      <Header />
      <img src={post.data.banner.url} alt="" />

      <div className={styles.post}>
        <h1>{post.data.title}</h1>
        <div className={styles.info}>
          <FiCalendar size={20} />
          <time>{post.first_publication_date}</time>
          <FiUser size={20} />
          <span>{post.data.author}</span>
          <FiClock size={20} />
          <span>{Math.ceil(wordCount / 200)} min</span>
        </div>
        {post.data.content.map(content => (
          <article key={content.heading}>
            <h2>{content.heading}</h2>
            <PrismicRichText field={content.body} />
          </article>
        ))}
      </div>
    </main>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

interface ContentProps {
  heading: string
  body: []
}

export const getStaticProps: GetStaticProps = async previewData => {
  const client = createClient()
  const slug = previewData.params?.slug

  const request = await client.getByUID('posts', String(slug))

  const post = {
    first_publication_date: new Date(
      request.first_publication_date
    ).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    data: {
      title: request.data.title,
      banner: {
        url: request.data.banner.url
      },
      author: request.data.author,
      content: request.data.content.map((content: ContentProps) => {
        return {
          heading: content.heading,
          body: content.body
        }
      })
    }
  }

  return {
    props: { post }
  }
}
