import React from "react"

type Props = {}

export default function Header({}: Props) {
     return (
          <div className='grid h-32 pt-4 justify-items-center'>
               <h1 className='text-2xl text-yellow-500'>TOP1SCORE</h1>
               <h1 className='text-2xl text-yellow-500'>ผลบอล ผลบอลสด</h1>
          </div>
     )
}
