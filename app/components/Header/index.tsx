import React from "react"
import Menu from "./Menu"

type Props = {}

export default function Header({}: Props) {
     return (
          <div className='container mx-auto mb-8'>
               <div className='grid h-32 pt-4 justify-items-center'>
                    <h1 className='text-2xl text-yellow-500'>TOP1SCORE</h1>
                    <h1 className='text-2xl text-yellow-500'>ผลบอล ผลบอลสด</h1>
                    <Menu />
               </div>
          </div>
     )
}
