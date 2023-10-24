import Image from 'next/image'
import PP2 from './page2'
import A3 from './page3'
export default function Home() {
  return (
   <>
    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px"}}>


         <div className='h-[500px] w-[950px] flex justify-center items-center p-4'>

           <div style={{width: "70%"}}>
            <img src="https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/gradient/at-dynamic-gradient.png" alt="" />
          </div>

          <div  style={{width: "30%"}}  className='grid justify-center items-center text-center p-2'>
              <h1 className='bg text-3xl font-bold'>Title</h1>
              <p className='bg font-light text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea, commodi impedit exe</p>
          </div>

         </div>
         
          
    </div>
    
    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px"}}>


         <div className='h-[500px] w-[950px] 0 flex justify-center items-center p-4'>

          <div  style={{width: "30%"}}  className='grid justify-center items-center text-center p-2'>
              <h1 className='bg text-3xl font-bold'>Title</h1>
              
              <p className='bg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea, commodi impedit exe
              </p>
          </div>
           <div style={{width: "50%"}} className='grid justify-end items-center '>
            <img src=
            "https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/gradient/copy-dynamic-gradient.png" alt="" />
          </div>


         </div>
         
          
    </div>

    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px" , marginBottom: "58px"}}>


         <div className='h-[500px] w-[950px]  flex justify-center items-center p-4'>

           <div style={{width: "70%"}}>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/video-play-6400118-5285057.png?f=webp" alt="" />
          </div>

          <div  style={{width: "30%"}}  className='grid justify-center items-center text-center p-2'>
              <h1 className='bg text-3xl font-bold'>Title</h1>
              <p className='bg font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea, commodi impedit exe</p>
          </div>

         </div>
         
          
    </div>
   </>
  )
}
