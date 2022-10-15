import { Link } from "@remix-run/react"
import React from "react"

type Props = {}

export default function Menu({}: Props) {
     return (
          <div className='grid grid-cols-4 gap-4 m-4 '>
               <Link to='/'>
                    <button
                         className='px-4 bg-yellow-500 rounded-full hover:bg-yellow-700'
                         type='submit'
                    >
                         ผลบอล
                    </button>
               </Link>
               <Link to='/blog'>
                    <button
                         className='px-4 bg-yellow-500 rounded-full hover:bg-yellow-700'
                         type='submit'
                    >
                         วิเคราะห์บอล
                    </button>
               </Link>
               <Link to='/new'>
                    <button
                         className='px-4 bg-yellow-500 rounded-full hover:bg-yellow-700'
                         type='submit'
                    >
                         ข่าวฟุตบอล
                    </button>
               </Link>
               <Link to='/about'>
                    <button
                         className='px-4 bg-yellow-500 rounded-full hover:bg-yellow-700'
                         type='submit'
                    >
                         ติดต่อเรา
                    </button>
               </Link>
          </div>
     )
}
