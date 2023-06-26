import React, { useContext } from 'react';
import { appContext } from '../Form';



const Step3 = () => {

    const { selectedAddOns, setSelectedAddOns, billingCycle, monthlyPricesAddOns, annualPricesAddOns } = useContext(appContext)

    const handleAddOns = (addOns) => {
        
        // Verificar si el add-on ya está seleccionado
  if (selectedAddOns.includes(addOns)) {
    // Si ya está seleccionado, eliminarlo del array
    setSelectedAddOns(selectedAddOns.filter(item => item !== addOns));
  } else {
    // Si no está seleccionado, agregarlo al array
    setSelectedAddOns([...selectedAddOns, addOns]);
  }
    };


    return (
        <div className='p-5 pb-2 lg:px-20 lg:pt-10'>
            <h2 className="text-blue-950 text-3xl font-bold">Pick add-ons</h2>
            <p className="text-gray-500 py-4 mb-3">Add-ons help enhance your gaming experience.</p>



            <div>
            <div className={`border-2 border-purple-500 hover:border-opacity-95 px-4 py-2 rounded-lg cursor-pointer lg:py-4 my-2 ${selectedAddOns.includes('addOns1') ? 'border-opacity-100' : 'border-opacity-20'}`}>
  <label htmlFor="addOns1" className="flex justify-between items-center">
    <div className="flex items-center my-auto">
      <input
        type="checkbox"
        id="addOns1"
        name="addOns1"
        value="addOns1"
        checked={selectedAddOns.includes('addOns1')}
        onChange={() => handleAddOns('addOns1')}
        className="h-5 w-4 rounded-2xl text-purple-500 focus:ring-purple-500 border-gray-300 focus:border-purple-500 focus:outline-none "
        

      />
      <div className="ml-2 lg:ml-5">
        <h3 className="text-base text-blue-900 font-medium">Online service</h3>
        <p className="text-gray-400 text-sm">Access to multiplayer games</p>
      </div>
    </div>
    <p className="text-violet-400 text-sm font-middle">
      {`${billingCycle ? `$${monthlyPricesAddOns.addOns1}/mo`: `$${annualPricesAddOns.addOns1}/yr`}`}
    </p>
  </label>
</div>
                <div className={`border-2 border-purple-500 hover:border-opacity-95  px-4 py-2 rounded-lg cursor-pointer lg:py-4 my-4 ${selectedAddOns.includes('addOns2') ? 'border-opacity-100' : 'border-opacity-20'
                    }`}>
                    <label
                        htmlFor="addOns2"
                        className='flex justify-between items-center'
                    >
                    <div className='flex items-center my-auto'>
                    <input
                        type="checkbox"
                        id="addOns2"
                        name="addOns2"
                        value="addOns2"
                        checked={selectedAddOns.includes('addOns2')}
                        onChange={() => handleAddOns('addOns2')}
                        className="h-5 w-4 rounded-2xl text-purple-500 focus:ring-purple-500 border-gray-300 focus:border-purple-500 focus:outline-none"
                    />
                    
                    
                    
                    <div className='ml-2 lg:ml-5'>
                    <h3 className="text-base text-blue-900 font-medium">Larger storage</h3>
                    <p className="text-gray-400 text-sm">Extra 1TB of cloud save</p>
                    </div>
                    </div> 
                    <p className='text-violet-400 text-sm font-middle'>{`${billingCycle ? `$${monthlyPricesAddOns.addOns2}/mo`: `$${annualPricesAddOns.addOns2}/yr`}`}</p>
                    
                      
                    </label>
                </div>
                <div className={`border-2 border-purple-500 hover:border-opacity-95  px-4 py-2 rounded-lg cursor-pointer lg:py-4 my-4 ${selectedAddOns.includes('addOns3') ? 'border-opacity-100' : 'border-opacity-20'
                    }`}>
                    <label
                        htmlFor="addOns3"
                        className='flex justify-between items-center'
                    >
                    <div className='flex items-center my-auto'>
                    <input
                        type="checkbox"
                        id="addOns3"
                        name="addOns3"
                        value="addOns3"
                        checked={selectedAddOns.includes('addOns3')}
                        onChange={() => handleAddOns('addOns3')}
                        className="h-5 w-4 rounded-2xl text-purple-500 focus:ring-purple-500 border-gray-300 focus:border-purple-500 focus:outline-none"
                    />
                    
                        <div className='ml-2 lg:ml-5'>
                        
                        
                        <h3 className="text-base text-blue-900 font-medium">Customizable Profile</h3>
                        <p className="text-gray-400 text-sm">Custom theme on your profile</p>

                        
                        </div>
                        </div>
                    <p className='text-violet-400 text-sm font-middle'>{`${billingCycle ? `$${monthlyPricesAddOns.addOns3}/mo`: `$${annualPricesAddOns.addOns3}/yr`}` }</p>
                        
                    </label>
                </div>





            </div>
            
        </div>
    );
}

export default Step3;
