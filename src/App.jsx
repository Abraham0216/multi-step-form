import React, { useEffect, useState } from 'react'
import ButtonsGroup from './components/buttonsGroup';
import Form from './components/Form/Form';
import FormProgressBar from './components/progressBar';


function App() {

  const [indexProgress, setIndexProgress] = useState(1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
	
  useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);




  return (
    <div className="App min-h-screen bg-blue-100 lg:flex justify-center items-center flex-col ">

    <div className='flex flex-col lg:flex-row  items-center lg:items-stretch lg:justify-between lg:p-4 lg:bg-white lg:w-[935px] lg:rounded-2xl lg:shadow-xl '>
    <div className='relative'>
    {
      windowWidth < 1024 
      ? (<svg width="375" height="172" viewBox="0 0 375 172"><defs><path id="a" d="M0 0h375v172H0z"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use href="#a"/></mask><use href="#a" fill="#483EFF"/><g mask="url(#b)"><g transform="translate(-151.029 -133.957)"><path fill="#6259FF" d="M79.546 349.634c54.547 128.646 292.524 204.132 354.626 99.852 62.102-104.28-95.035-123.204-150.583-230.963-55.547-107.759-98.711-175.015-178.973-150.466C24.354 92.607 25 220.987 79.546 349.634Z"/><ellipse cx="129.864" cy="258.711" fill="#FFAF7E" rx="96.329" ry="96.373"/><path fill="#F9818E" d="M464.88 433.146c87.31-40.69 133.585-206.525 60.253-246.82-73.333-40.293-82.587 68.465-155.485 109.343-72.898 40.877-118.192 72.245-99.348 126.973 18.845 54.728 107.27 51.194 194.58 10.504Z"/><g stroke="#FFF" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5"><path d="m367.336 243.125 15.263-15.549M430.872 251.016l-17.995-15.112M399.36 271.751l-9.94 21.293"/></g></g></g></g></svg>)
      : (<svg xmlns="http://www.w3.org/2000/svg" width="274" height="568" fill="none" viewBox="0 0 274 568"><rect width="274" height="568" fill="#483EFF" rx="10"/><mask id="a" width="274" height="568" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="274" height="568" fill="#fff" rx="10"/></mask><g mask="url(#a)"><path fill="#6259FF" fill-rule="evenodd" d="M-34.692 543.101C3.247 632.538 168.767 685.017 211.96 612.52c43.194-72.497-66.099-85.653-104.735-160.569-38.635-74.916-68.657-121.674-124.482-104.607-55.824 17.068-55.375 106.32-17.436 195.757Z" clip-rule="evenodd"/><path fill="#F9818E" fill-rule="evenodd" d="M233.095 601.153c60.679-28.278 92.839-143.526 41.875-171.528-50.965-28.003-57.397 47.579-108.059 75.987-50.662 28.408-82.14 50.207-69.044 88.241 13.096 38.034 74.549 35.578 135.228 7.3Z" clip-rule="evenodd"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="bevel" stroke-width="5" d="m165.305 469.097 10.607-10.806M209.461 474.581l-12.506-10.503M187.56 488.991l-6.908 14.798"/><path fill="#FFAF7E" d="M.305 546.891c37.003 0 67-29.997 67-67s-29.997-67-67-67-67 29.997-67 67 29.997 67 67 67Z"/></g></svg>)
    
      
      }
      <FormProgressBar step={indexProgress}/>
    
    </div>
      
    
      <div className='w-11/12 lg:w-4/6   min-h-full  relative bottom-20 lg:bottom-0  bg-white   rounded-lg shadow-xl lg:rounded-none lg:shadow-none lg:mx-0'>
      <Form indexProgress={indexProgress} setIndexProgress={setIndexProgress}  /> 
      { indexProgress > 1 &&
        <ButtonsGroup indexProgress={indexProgress} setIndexProgress={setIndexProgress}/>
      
      }
      
      
  
      </div>
       
      
      
    
    
    </div>
    <div class="attribution hidden 2xl:block mt-14  opacity-70 text-2xl">
      Coded by <a href="#d" target='_blank' className='hover:underline' >Abraham Oñate 👨‍💻🔥</a>.
  </div>
    </div>
  );
}

export default App;
