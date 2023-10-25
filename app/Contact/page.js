import React from 'react'

function page() {
  return (
    <>
    
    
      <div style={{display: "grid", justifyContent:"center", alignItems: "center", height: "100hv", width: "100hv " , color: "#2b2d42"}}>

            <div className='bg sm:w-[750px]      w-[450px] my-[300px]  rounded-3xl shadow-2xl' style={{background: "#d0f4de"}}>

                <div className='grid  items-center ju justify-around'>

                    <div className='grid md:flex  justify-center items-center gap-[10px] md:gap-[200px] my-[60px]'>
                        {/* name input */}
                          <div>
                      <h1 className='bg text-center text-lg md:text-2xl'>Name:</h1>
                    <input  className='h-[30px] rounded-lg shadow-2xl my-2 scale-125 md:scale-125 ' type="text" />
                       {/* name input */}

                          {/* email input */}
                        </div>
                        <div>
                      <h1 className='bg text-center text-lg md:text-2xl' >Email:</h1>
                    <input  className='h-[30px] rounded-lg shadow-2xl my-2 scale-125 md:scale-125  ' type="email" />
                        </div>
                           {/* email input */}

                               

                    </div>
                      
                                    {/* Contact input */}    
                                        <div className=' grid  items-center  justify-center text-center'>
                                              <input  className=' rounded-2xl shadow-2xl mb-7 w-[400px] h-32 md:w-[670px]

                                  ' type="text" />
                                        </div>
                              

                             {/* Contact input */}   

                            

                                    {/* btn */}     
                                <div className='grid  items-center ju justify-around'>
                                    <button  type='submit'  className='bg
                                    
                                     bg-yellow-300 md:p-2 p-1 w- w-[90px] my-3 rounded-lg shadow-2xl

                                    t text-xl hover:scale-110 transition-all ease-in-out
                                     '>Submit</button>
                                </div>
                                 {/* btn */}     
                             
                </div>

            </div>

      </div>
    
    
    </>
  
  )
}

export default page