import Image from 'next/image'
import PP2 from './page2'
import A3 from './page3'
export default function Home() {
  return (
   <>
    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px"  , color: "#2b2d42"}}>


         <div className='md:h-[500px] md:w-[950px] flex justify-center items-center p-4 sm:h-[500px] sm:w-[640px] 
         lg:w-[1000px]'>

           <div style={{width: "70%"}} className='grid justify-center items-center text-center p-2'>
            <img  className='w-[300px] md:w-[450px]'   src=
            "https://gmedia.playstation.com/is/image/SIEPDC/section5a-characters-kratos?fmt=png-alpha&scl=1" alt="" />
          </div>

          <div  style={{width: "30%"}}  className='grid justify-center items-center text-center p-2'>
              <h1 className='bg text-2xl  font-bold md:text-3xl '>God of War Ragnarök™</h1>
              <p className='bg font-light text-lg md:text-2xl  te text-red-700'>Embark on an epic and heartfelt journey as Kratos and Atreus struggle with holding on and letting go</p>
          </div>

         </div>
         
          
    </div>
    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px" , color: "#2b2d42"}}>


         <div className='md:h-[500px] md:w-[950px] flex justify-center items-center p-4 sm:h-[500px] sm:w-[640px]  lg:w-[1000px]'>

           <div  style={{width: "40%"}}  className='grid justify-center items-center text-center p-2'>
              <h1 className='bg text-2xl  font-bold md:text-3xl '>The Last of Us™</h1>
              <p className='bg font-light text-lg md:text-2xl text- text-green-600 '>What will you do to survive?</p>
          </div>

           <div style={{width: "70%"}} className='grid justify-center items-center text-center p-2'>
            <img  className='w-[300px] md:w-[1000px]'   src=
            "https://image.api.playstation.com/vulcan/ap/rnd/202206/0722/fG7ZzoEVtkEy96oOsbWICnXX.png" alt="" />
          </div>

         

         </div>
         
          
    </div>

    <div style={{display: "grid", justifyContent:"center", alignItems: "center", marginTop: "70px" , color: "#2b2d42"}}>


<div className='md:h-[500px] md:w-[950px] flex justify-center items-center p-4 sm:h-[500px] sm:w-[640px]  lg:w-[1000px] my-4'>

  <div style={{width: "70%"}} className='grid justify-center items-center text-center p-2'>
   <img  className='w-[300px] md:w-[550px]'   src=
   "https://freepngimg.com/thumb/bloodborne/20260-5-bloodborne-transparent-image.png" alt="" />
 </div>

 <div  style={{width: "30%"}}  className='grid justify-center items-center text-center p-2'>
     <h1 className='bg text-2xl  font-bold md:text-3xl '>Bloodborne™</h1>
     <p className='bg font-light text-lg md:text-2xl t text-blue-700 '>Hunt your nightmares as you search for answers in the ancient city of Yharnam</p>
 </div>

</div>

 
</div>
   

    
   </>
  )
}
