import Blog from "~/components/Blog"
import Footer from "~/components/Footer"
import Header from "~/components/Header"
import { blogData } from "~/data/blog"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BlogPage() {
     return (
          <div className='h-full bg-gray-700'>
               <Header />
               <Blog data={blogData}></Blog>
               <Footer />
          </div>
     )
}
