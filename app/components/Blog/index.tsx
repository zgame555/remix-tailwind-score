import React from "react"

export interface DataInterface {
     img?: string
     title: string
     content: string
}

type Props = {
     data?: DataInterface[]
     children?: React.ReactNode
}

export default function Blog({ data, children }: Props) {
     return (
          <div className='grid justify-items-center'>
               <div className='w-full max-w-3xl px-8'>
                    {data &&
                         data.map((item, index) => {
                              return (
                                   <div
                                        className='grid w-full grid-cols-2 p-8 my-8 bg-white rounded-lg shadow-lg'
                                        key={index}
                                   >
                                        <div className='flex items-center justify-center px-4'>
                                             <img
                                                  src={item.img}
                                                  alt=' '
                                                  className='rounded-lg shadow-lg'
                                             />
                                        </div>
                                        <div className='px-4 content'>
                                             <h1 className='text-lg text-yellow-500'>
                                                  {item.title}
                                             </h1>
                                             <p className='text-xs text-gray-600'>
                                                  {item.content}
                                             </p>
                                        </div>
                                   </div>
                              )
                         })}
               </div>
          </div>
     )
}
