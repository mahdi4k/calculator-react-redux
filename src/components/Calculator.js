import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loadAnswer, loadButtons,loadClear, loadBackspace} from '../store/actions/calculator'

const CalculatorApp = () => {
    const dispatch = useDispatch()


      // handle answer 
    const handleAnswer = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

    // view store 
    const {calculatorReducer} = useSelector((state) => state.allReducers)

    return (
           <section>
               <div className="bg-gray-400 w-96 mx-auto rounded-lg overflow-hidden mt-10"> 
                   <div className=' h-20 '>
                       <input
                       type='text'
                       placeholder='0'
                       readOnly
                       value={(calculatorReducer.ans).length === 0 ? calculatorReducer.number : calculatorReducer.ans}
                       className=' w-full h-full border border-white bg-white text-gray-900 text-4xl text-right pr-5 '

                        />
                    </div>
                
                   <div className='grid grid-cols-4 gap-2 my-7 mx-3'>
                       <button onClick={() =>dispatch(loadClear())} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>AC</button>
                       <button onClick={() =>dispatch(loadBackspace())}  className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>C</button>
                       <button onClick={() =>dispatch(loadButtons('/'))} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>/</button>
                       <button onClick={() =>dispatch(loadButtons('+'))} className='text-gray  bg-white w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'>+</button> 


                       <button onClick={() =>dispatch(loadButtons(9))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>9</button> 
                        <button onClick={() =>dispatch(loadButtons(8))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>8</button>
                       <button onClick={() =>dispatch(loadButtons(7))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>7</button> 

                       <button onClick={() =>dispatch(loadButtons(4))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>4</button>
                       <button onClick={() =>dispatch(loadButtons(5))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>5</button>
                       <button onClick={() =>dispatch(loadButtons(6))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>6</button>
                       <button onClick={() =>dispatch(loadButtons('-'))} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>-</button> 

                        <button onClick={() =>dispatch(loadButtons(1))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>1</button>
                       <button onClick={() =>dispatch(loadButtons(2))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>2</button>
                       <button onClick={() =>dispatch(loadButtons(3))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>3</button>
                       <button onClick={() =>dispatch(loadButtons('*'))} className='text-gray  bg-white w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>*</button>

                       <button onClick={() =>dispatch(loadButtons('.'))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>.</button>
                       <button onClick={() =>dispatch(loadButtons(0))} className='text-white w-20 h-20 bg-indigo-500 rounded-lg font-bold text-3xl flex justify-center items-center shadow'>0</button> 
                        <button onClick={handleAnswer} className='text-gray  bg-white w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'>=</button> 
        
                   </div>
                   
               </div>
           </section>
    )
}

export default CalculatorApp
