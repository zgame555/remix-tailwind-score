import Score from "./Score"

type Props = {}

export default function Content({}: Props) {
     return (
          <div className='grid justify-items-center'>
               <Score />
          </div>
     )
}
