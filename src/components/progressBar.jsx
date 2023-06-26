
import React from "react";
import "react-step-progress-bar/styles.css";

const FormProgressBar = (props) => {

    return (
        <div className=" w-1/2  absolute top-8 left-1/4 lg:left-11   ">
            <div
                height={0}
                percent={((props.step - 1) * 100) / 3}
                
            >
                <div className="flex flex-row lg:flex-col lg:h-60 justify-between items-center"> 
                <div className='flex flex-row-reverse justify-center items-center w-[190px] '>
                <div className=" hidden lg:block  lg:ml-4 w-[120px] text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 1</p>
                <p className="text-white text-lg">YOUR INFO</p>
                </div>
                <div transition="scale">
                    
                        
                        
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${( props.step === 1) && 'bg-blue-300 text-blue-800 font-bold'}`}>1</div>

                    
                </div>
                </div>
                <div className='flex flex-row-reverse justify-center items-center w-[190px] '>
                <div className=" hidden lg:block  lg:ml-4 w-[120px] text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 2</p>
                <p className="text-white text-lg">SELECT PLAN</p>
                </div>
                <div transition="scale">
                    
                        
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${( props.step === 2) && 'bg-blue-300 text-blue-800 font-bold'}`}>2</div>

                    
                </div>
                </div>
                <div className='flex flex-row-reverse justify-center items-center w-[190px] '>
                <div className=" hidden lg:block  lg:ml-4 w-[120px] text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 3</p>
                <p className="text-white text-lg">ADD-ONS</p>
                </div>
                <div transition="scale">
                    
                        
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${( props.step === 3) && 'bg-blue-300 text-blue-800 font-bold'}`}>3</div>

                    
                </div>
                </div>
                <div className='flex flex-row-reverse justify-center items-center w-[190px] '>
                <div className=" hidden lg:block  lg:ml-4 w-[120px] text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 4</p>
                <p className="text-white text-lg">SUMMARY</p>
                </div>
                <div transition="scale">
                    
                        
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${( props.step === 4) && 'bg-blue-300 text-blue-800 font-bold'}`}>4</div>

                    
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}


export default FormProgressBar;





/* import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const FormProgressBar = (props) => {

    return (
        <div className=" w-1/2 lg:h-48 absolute top-14 left-1/4 lg:top-52   lg:left-0">
            <ProgressBar
                height={0}
                percent={((props.step - 1) * 100) / 3}
                
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center ${accomplished && 'bg-blue-300 text-blue-800 font-bold'}`}>1</div>

                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center ${accomplished && 'bg-blue-300 text-blue-800 font-bold'}`}>2</div>

                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center ${accomplished && 'bg-blue-300 text-blue-950 font-bold'}`}>3</div>

                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center ${accomplished && 'bg-blue-300 text-blue-950 font-bold'}`}>4</div>

                    )}
                </Step>
            </ProgressBar>
        </div>
    );
}


export default FormProgressBar; 

///////

import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const FormProgressBar = (props) => {

    return (
        <div className=" w-1/2  absolute top-14 left-1/4 lg:top-52   lg:left-0">
            <ProgressBar
                height={0}
                percent={((props.step - 1) * 100) / 3}
                
            >
                <div className="lg:flex flex-col  lg:absolute lg:left-[380px] lg:top-0.5 lg:h-60 justify-between items-center">
                <div className='lg:r lg:w-[274px]'>
                <div className=" hidden lg:block lg:ml-8 text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 1</p>
                <p className="text-white text-lg">YOUR INFO</p>
                </div>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${(accomplished || props.step === 1) && 'bg-blue-300 text-blue-950 font-bold'}`}>1</div>

                    )}
                </Step>
                </div>
                <div className='lg:flex flex-row items-center lg:w-[274px]'>
                <div className=" hidden lg:block lg:ml-8 text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 2</p>
                <p className="text-white text-lg">SELECT PLAN</p>
                </div>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${(accomplished || props.step === 2) && 'bg-blue-300 text-blue-950 font-bold'}`}>2</div>

                    )}
                </Step>
                </div>
                <div className='lg:flex flex-row items-center lg:w-[274px]'>
                <div className=" hidden lg:block lg:ml-8 text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 3</p>
                <p className="text-white text-lg">ADD-ONS</p>
                </div>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${(accomplished || props.step === 3) && 'bg-blue-300 text-blue-950 font-bold'}`}>3</div>

                    )}
                </Step>
                </div>
                <div className='lg:flex flex-row items-center lg:w-[274px]'>
                <div className=" hidden lg:block lg:ml-8 text-left">
                <p className="text-white text-xs opacity-40 font-medium">STEP 4</p>
                <p className="text-white text-lg">SUMMARY</p>
                </div>
                <Step transition="scale">
                    {({ accomplished, indexProgress }) => (
                        <div className={`text-white  w-10 h-10 border rounded-full flex justify-center items-center transition-all duration-500 ease-in-out ${(accomplished || props.step === 4) && 'bg-blue-300 text-blue-950 font-bold'}`}>4</div>

                    )}
                </Step>
                </div>
                </div>
            </ProgressBar>
        </div>
    );
}


export default FormProgressBar;



*/






