import React from 'react'
const CalculatorApp = () => {

    return (
           <section>
               <div className="bg-gray-400 w-96 mx-auto rounded-lg overflow-hidden mt-10">

                   <div className=' h-20 '>
                       <input
                       type='text'
                       placeholder='0'
                       className=' w-full h-full border border-white bg-white text-gray-900 text-4xl text-right pr-5 '
                        />
                       </div>
                

                   {/* keypad */}
                   <div className='grid grid-cols-4 gap-2 my-5 mx-3'>
                       <button  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
                       <button  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
                       <button  className='text-gray  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button> 

                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button> 
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button> 

                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
                       <button  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button> 

                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
                       <button  className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button> 
                       <button  className='text-gray  bg-white w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button> 
                   </div>
                   
               </div>
           </section>
    )
}

export default CalculatorApp