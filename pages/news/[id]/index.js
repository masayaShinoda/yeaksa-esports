import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router'

const News = () => {
    
    // const router = useRouter()
    // const {id} = router.query
    return (
        <div>
            <p style={{color: `#212121`}}>This is article with ID {id}</p>   
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch('')
}

export default News