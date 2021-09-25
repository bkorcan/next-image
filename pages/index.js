import Style from '../styles/image.module.css'
import Image from 'next/image'
import { useMediaQuery } from '@mui/material'

//  lets create breakpoint at 600px using  useMediaQuery
// mx600   true  if container 0 to 600px  else false

export default function ImageHome() {

  const mx600 = useMediaQuery('( max-width:600px )')


  return (

    <div className={Style.container}>

      <div style={{ display: mx600 ? 'none' : 'block' }} className={Style.hor} >
        <Image
          src="/img/hor.jpg"
          alt="alt"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div style={{ display: mx600 ? 'block' : 'none' }} className={Style.ver} >
        <Image
          src="/img/ver.jpg"
          alt="alt"
          layout="fill"
          objectFit="cover"
        />
      </div>


    </div>
  )
}