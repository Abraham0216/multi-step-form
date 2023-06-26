import React, { useContext } from 'react';
import { appContext } from '../Form';



const Step4 = () => {

  const { selectedAddOns, billingCycle, monthlyPricesPlan, annualPricesPlan, monthlyPricesAddOns, annualPricesAddOns, selectedPlan } = useContext(appContext)
  console.log(selectedAddOns)
  

  let planIndex;

  if (selectedPlan === 'Arcade') {
    planIndex = 0;
  } else if (selectedPlan === 'Advance') {
    planIndex = 1;
  } else {
    planIndex = 2;
  }

  const addOnNames = {
    addOns1: 'Online service',
    addOns2: 'Larger storage',
    addOns3: 'Customizable Profile',
  };


  let total = billingCycle ? monthlyPricesPlan[planIndex].price : annualPricesPlan[planIndex].price;
  

  selectedAddOns.forEach(addOn => {
  total += (billingCycle ? monthlyPricesAddOns[addOn] : annualPricesAddOns[addOn]);
}); 
  
  return (
    <div className='p-6 pb-2 lg:px-16 lg:py-10'>
      <h2 className="text-blue-950 text-3xl font-bold">Finishing up</h2>
      <p className="text-gray-500 py-4 mb-3">Double-check everything looks OK before confirming.</p>



      <div>
        <div className={`border-b border-gray-300 px-4 py-2  cursor-pointer my-2`}>
          <label className="flex justify-between items-center">
            <div className="flex items-center my-auto">

              <div className="ml-2">
                <h3 className="text-base text-blue-900 font-medium">{` ${billingCycle ? `${selectedPlan} (Montly)` : `${selectedPlan} (Yearly)`}`}</h3>
                <p className="text-gray-400 text-sm hover:text-violet-500 cursor-pointer underline">Change</p>
              </div>
            </div>
            <p className="text-blue-950 font-bold">
              { billingCycle ? `$${monthlyPricesPlan[planIndex].price}/mo` :`$${ annualPricesPlan[planIndex].price}/yr`}
            </p>
          </label>
        </div>


        {selectedAddOns.length > 0 && (
      <div>
        
        <ul>
          {selectedAddOns.map(addOn => (
            <div className='px-4 pt-0.5 lg:my-3'>
            <div className='flex justify-between items-center'>
            <div className="flex items-center my-auto">
            <div className="ml-2">
            <li className="text-gray-400 text-sm" key={addOn}>
            {addOnNames[addOn] ? addOnNames[addOn] : ''}  
            </li>
            </div>
            </div>
            <p className="text-blue-900 font-middle">{ billingCycle ? `+$${monthlyPricesAddOns[addOn]}/mo` : `+$${annualPricesAddOns[addOn]}/yr`}</p>
            </div>
            </div>
          ))}
        </ul>
      </div>
    )}

    <div className={`px-4 pt-0.5 mt-6 lg:mt-10 pb-4 mb-0.5`}>
          <label
            
            className='flex justify-between items-center'
          >
            <div className='flex items-center my-auto'>
              <div className='ml-2'>



                <p className="text-gray-400 text-sm">{`Total (per ${billingCycle ? 'month)' : 'year)'}`}</p>


              </div>
            </div>
            
            <p className='text-violet-500 font-bold'>{ billingCycle ? `+$${total}/mo` : `+$${total}/yr`}</p>

          </label>
        </div>

      
    



        
        
  
        {/* 

              {selectedAddOns.length > 0 && (
        <ul className="px-4 pt-0.5 pb-4 mb-4">
          <label htmlFor="addOns3" className="flex justify-between items-center">
            <div className="flex items-center my-auto">
              <div className="ml-2">
                {selectedAddOns.map((plus, index) => (
                  <li className="text-gray-400 text-sm" key={index}>
                    {plus} - {billingCycle ? `$${addOnsPrice[planIndex][index].price}/mo` : `$${addOnsPrice[planIndex][index].price}/yr`}
                  </li>
                ))}
              </div>
            </div>
            <p className="text-blue-900 font-middle">
              {billingCycle
                ? `$${monthlyPricesAddOns[planIndex].price}/mo`
                : `$${annualPricesAddOns[planIndex].price}/yr`}
            </p>
          </label>
        </ul>
      )}

















        
        
          <ul className={`px-4 pt-0.5 pb-4 mb-4`}>

            <label
            htmlFor="addOns3"
            className='flex justify-between items-center'
          >
            <div className='flex items-center my-auto'>
              <div className='ml-2'>


                selectedAddOns.map((plus, index) => {
                  <li className="text-gray-400 text-sm" key={index}>{plus}</li>
                })

              </div>
            </div>
            <p className='text-blue-900 font-middle'>{billingCycle ? monthlyPrices[].price : annualPrices[].price}</p>

          </label>


          </ul>

        <div className={`px-4 pt-0.5 pb-4 mb-4`}>
          <label
            htmlFor="addOns3"
            className='flex justify-between items-center'
          >
            <div className='flex items-center my-auto'>
              <div className='ml-2'>



                <p className="text-gray-400 text-sm">Custom theme on your profile</p>


              </div>
            </div>
            <p className='text-blue-900 font-middle'>{billingCycle ? monthlyPrices[2].price : annualPrices[2].price}</p>

          </label>
        </div>
        <div className={`px-4 pt-0.5 pb-4 mb-0.5`}>
          <label
            htmlFor="addOns3"
            className='flex justify-between items-center'
          >
            <div className='flex items-center my-auto'>
              <div className='ml-2'>



                <p className="text-gray-400 text-sm">{`Total (per ${billingCycle ? 'month)' : 'year)'}`}</p>


              </div>
            </div>
            */}
         { //  <p className='text-violet-500 font-bold'>{{/* TODO: Function of Total amount */ }}</p>}
}{/* 
          </label>
        </div> */}

 




      </div>

    </div>
  );
}

export default Step4;
