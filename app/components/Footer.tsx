import React from "react"

type Props = {}

export default function Footer({}: Props) {
     return (
          <div className='grid h-32 pt-10 justify-items-center'>
               <h1 className='text-base text-white'>
                    ลงทะเบียนฟรีเพื่อรับผลฟุตบอลล่าสุด
               </h1>
               <h1 className='text-base text-white'>
                    รับผลการแข่งขันฟุตบอลวันนี้ทันที.
               </h1>
          </div>
     )
}
