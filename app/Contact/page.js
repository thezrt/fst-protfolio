import React from 'react'

function page() {
  return (
    <>
    
    
      <div style={{display: "grid", justifyContent:"center", alignItems: "center", height: "100hv", width: "100hv"}}>

            <div className='bg  w-[760px] my-[300px]  rounded-3xl shadow-2xl' style={{background: "#606c38"}}>

                <div className='grid  items-center ju justify-around'>

                    <div className='flex justify-center items-center gap-[200px] my-[60px]'>
                        {/* name input */}
                          <div>
                      <h1 className='bg text-center text-2xl'>Name:</h1>
                    <input  className='h-[30px] rounded-lg shadow-2xl my-2 scale-125' type="text" />
                       {/* name input */}

                          {/* email input */}
                        </div>
                        <div>
                      <h1 className='bg text-center text-2xl' >Email:</h1>
                    <input  className='h-[30px] rounded-lg shadow-2xl my-2 scale-125' type="email" />
                        </div>
                           {/* email input */}

                               

                    </div>
                      
                                    {/* Contact input */}    

                                <input  className='h-[200px] rounded-2xl shadow-2xl mb-7' type="text" />

                             {/* Contact input */}   

                                {/* Contact input */}   

                                <div className='grid  items-center ju justify-around'>
                                    <button  type='submit'  className='bg bg-yellow-300 p-2 w- w-[90px] my-3 rounded-lg shadow-2xl

                                    t text-xl hover:scale-110 transition-all ease-in-out
                                     '>Submit</button>
                                </div>
                             
                </div>

            </div>

      </div>
    
    
    </>
  
  )
}

export default page