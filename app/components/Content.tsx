import { blogData } from "~/data/blog"
import Blog from "./Blog"
import Score from "./Score"

type Props = {}

export default function Content({}: Props) {
     return (
          <div className='grid justify-items-center'>
               <Score />
               <Blog data={blogData}></Blog>
          </div>
     )
}
