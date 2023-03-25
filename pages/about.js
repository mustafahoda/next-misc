import Footer from "@/components/Footer"
import Head from "next/head"

export default function About(second) {
    return (
        <>
            <Head>
                <title>YOOOO</title>
                <meta name="description" content="Dummy Text"></meta>

            </Head>
            <h1 className="content">About</h1>
        </>
    )
}

About.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer></Footer>
        </>
    )
}