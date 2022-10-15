import Blog from "~/components/Blog"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import { scoreData } from "~/data/score"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function NewPage() {
     return (
          <div className='h-full bg-gray-700'>
               <Header />
               <Blog data={scoreData}></Blog>
               <Footer />
          </div>
     )
}
