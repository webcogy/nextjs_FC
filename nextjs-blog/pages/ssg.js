import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css';
import Layout from '../components/Layouts';
import SubLayout from '../components/SubLayout';


/**
 * SSG: 데이터 요청을 하지 않는 정적인 사이트
 *
 * 개발환경에선 SSG가 SSR처럼 보이므로, 빌드 후 확인해봐야함
 * yarn build
 * yarn start
 */
export async function getStaticProps(){
  console.log('server')
  return {
    props:{time:new Date().toISOString()}
  }
}


export default function SSG({time}) {
  return (
    <>
      <h1 className={styles.title}>
        {time}
      </h1>
    </>
  )
}


SSG.getLayout = function getLayout(page){
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}