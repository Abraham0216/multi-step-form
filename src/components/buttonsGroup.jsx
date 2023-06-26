import React from 'react';



const ButtonsGroup = ({ indexProgress, setIndexProgress}) => {


    
    const prevButton = () => {
        if (indexProgress > 1) {
          setIndexProgress(prevIndex => prevIndex - 1)
        }
      }
    
      const nextButton = () => {
       
        
        
        
        if (indexProgress < 5 && indexProgress !== 1) {
          
            
          
          setIndexProgress(prevIndex => prevIndex + 1) 
        } 

      }

    return (
      
      (indexProgress < 5) &&
          (<footer className='w-full bg-white p-4 lg:px-20 lg:absolute fixed bottom-0 left-0'>
            <div className='flex flex-row-reverse justify-between'>
            <button type='submit' onClick={nextButton} className={`bg-blue-950 p-4 lg:px-9 lg:py-3  rounded-xl text-white font-medium  hover:opacity-80 ${indexProgress === 4 && 'bg-violet-600'}`}>{indexProgress === 4 ? 'Confirm' : 'Next Step'}</button>
            <button type='button' onClick={prevButton} className={`${indexProgress === 1 && 'opacity-0 cursor-default'} py-4 text-lg text-gray-400 hover:text-violet-500   font-medium`} >Go Back</button>
            </div>
            </footer>)
            
        
            
    );
}

export default ButtonsGroup;
