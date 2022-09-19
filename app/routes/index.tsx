import Content from "~/components/Content"
import Footer from "~/components/Footer"
import Header from "~/components/Header"

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Index() {
     return (
          <div className="h-screen bg-gray-700">
               <Header />
               <Content />
               <Footer />
          </div>
     )
}
