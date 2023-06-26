import React, { useContext } from 'react';
import { Switch } from '@headlessui/react'
import { appContext } from '../Form';
const Step2 = () => {

    const { selectedPlan, setSelectedPlan, monthlyPricesPlan, annualPricesPlan, billingCycle, setBillingCycle } = useContext(appContext)
    
    const handlePlanSelection = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div className='p-8 pb-2 lg:py-12 lg:px-20'>
            <h2 className="text-blue-950 text-3xl font-bold">Select your plan</h2>
            <p className="text-gray-600 py-4 mb-3">You have the option of monthly or yearly billing.</p>



            <div className='lg:flex flex-row gap-4'>
                <div className={`border-2 border-purple-500 hover:border-opacity-95 px-4 py-2 rounded-lg cursor-pointer my-4 ${selectedPlan === 'Arcade' ? 'border-opacity-100' : 'border-opacity-20'
                    }`}>
                    <input
                        type="radio"
                        id="plan1"
                        name="plan"
                        value="Plan 1"
                        checked={selectedPlan === 'Arcade'}
                        onChange={() => handlePlanSelection('Arcade')}
                        className="hidden"
                    />
                    <label
                        htmlFor="plan1"
                    >
                        <div className='flex items-center lg:flex-col lg:h-44 lg:w-28 lg:justify-around lg:items-start my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E"/><path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z"/></g></svg>
                        <div className='ml-5 lg:ml-0'>
                        <h3 className="text-lg font-medium">Arcade</h3>
                        <p className="text-gray-500">{`${billingCycle ? `$${monthlyPricesPlan[0].price}/mo` : `$${annualPricesPlan[0].price}/yr`}`}</p>
                        {
                                !billingCycle && <p className='text-violet-400 lg:text-blue-900 text-sm font-middle lg:mt-2'>2 months free</p>
                        } 
                        </div>
                        </div>
                    </label>
                </div>
                <div className={`border-2 border-purple-500 hover:border-opacity-95 px-4 py-2 rounded-lg cursor-pointer my-4 ${selectedPlan === 'Advance' ? 'border-opacity-100' : 'border-opacity-20'
                    }`}>
                    <input
                        type="radio"
                        id="plan2"
                        name="plan"
                        value="Plan62"
                        checked={selectedPlan === 'Advance'}
                        onChange={() => handlePlanSelection('Advance')}
                        className="hidden"
                    />
                    <label
                        htmlFor="plan2"

                    >
                    
                    <div className='flex items-center lg:flex-col lg:h-44 lg:w-28 lg:justify-around lg:items-start my-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E"/><path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z"/></g></svg>
                    <div className='ml-5 lg:ml-0'>
                    <h3 className="text-lg font-medium">Advanced</h3>
                    <p className="text-gray-500">{`${billingCycle ? `$${monthlyPricesPlan[1].price}/mo` : `$${annualPricesPlan[1].price}/yr`}`}</p>
                    {
                                !billingCycle && <p className='text-violet-400 lg:text-blue-900 text-sm font-middle lg:mt-2'>2 months free</p>
                    } 
                    </div>
                    </div>    
                    </label>
                </div>
                <div className={`border-2 border-purple-500 hover:border-opacity-95 px-4 py-2 rounded-lg cursor-pointer my-4 ${selectedPlan === 'Pro' ? 'border-opacity-100' : 'border-opacity-20'
                    }`}>
                    <input
                        type="radio"
                        id="plan3"
                        name="plan"
                        value="Plan3"
                        checked={selectedPlan === 'Pro'}
                        onChange={() => handlePlanSelection('Pro')}
                        className="hidden"
                    />
                    <label
                        htmlFor="plan3"

                    >
                        <div className='flex items-center lg:flex-col lg:h-44 lg:w-28 lg:justify-around lg:items-start my-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF"/><path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z"/></g></svg>
                        <div className='ml-5 lg:ml-0'>
                        <h3 className="text-lg font-medium">Pro</h3>
                        <p className="text-gray-500">{`${billingCycle ? `$${monthlyPricesPlan[2].price}/mo` : `$${annualPricesPlan[2].price}/yr`}` }</p>
                        {
                                !billingCycle && <p className='text-violet-400 lg:text-blue-900 text-sm font-middle lg:mt-2'>2 months free</p>
                        } 
                        </div>
                        </div>
                    </label>
                </div>





            </div>
            <div className='flex flex-row justify-evenly lg:justify-center lg:gap-8 py-6'>
            <p className={`text-gray-500 text-lg ${billingCycle && 'text-blue-950 font-bold'}`}>Monthly</p>
            <Switch
      checked={billingCycle}
      onChange={() => setBillingCycle(!billingCycle)}
      className={`${
        billingCycle ? 'bg-blue-900' : 'bg-blue-900'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span
        className={`${
          billingCycle ? 'translate-x-1' : 'translate-x-6'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
            <p className={`text-gray-500 text-lg ${!billingCycle && 'text-blue-950 font-bold'}`}>Yearly</p>
            </div>
        </div>
    );
}

export default Step2;
