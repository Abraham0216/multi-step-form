import React, { createContext, useState } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';

export const appContext = createContext(null)

const Form = ({ indexProgress, setIndexProgress }) => {


    const [selectedPlan, setSelectedPlan] = useState('Arcade');
    const [billingCycle, setBillingCycle] = useState(true);
    const [selectedAddOns, setSelectedAddOns] = useState([]);
    
    


    

    const planPrice = [[{name: 'Arcade', price: 9}, {name: 'Advance', price: 12}, {name: 'Pro', price: 15}], [{name: 'Arcade', price: 90}, {name: 'Advance', price: 120}, {name: 'Pro', price: 150}]]
    /* const planPrice = [[{name: 'Arcade', price: "$9/mo"}, {name: 'Advance', price: "$12/mo"}, {name: 'Pro', price: "$15/mo"}], [{name: 'Arcade', price: "$90/yr"}, {name: 'Advance', price: "$120/yr"}, {name: 'Pro', price: "$150/yr"}]]
 */
    
    const addOns = [{
        addOns1: 1,
        addOns2: 2,
        addOns3: 2,
      }, {
        addOns1: 10,
        addOns2: 20,
        addOns3: 20,
      }];
    

    const monthlyPricesAddOns = addOns[0];
    const annualPricesAddOns = addOns[1];


    const monthlyPricesPlan = planPrice[0];
    const annualPricesPlan = planPrice[1];


    const stepShow = () => {
      switch (indexProgress) {
        case 1:
          return <Step1/>;
        case 2:
          return <Step2/>;
        case 3:
          return <Step3/>;
        case 4:
          return <Step4/>;
        case 5:
          return <Step5/>;
        default:
          break;
      }
    }
    
    

    

    return (
        <appContext.Provider value={{ selectedPlan, setSelectedPlan, planPrice, monthlyPricesPlan, annualPricesPlan, billingCycle, setBillingCycle, selectedAddOns, setSelectedAddOns, monthlyPricesAddOns, annualPricesAddOns, indexProgress, setIndexProgress }}>
        
            <>
            


          {stepShow()} 

            
            {/* <Step1/> */}
            {/* <Step2/> */}  
            {/* <Step3/> */} 
            {/* <Step4/>  */} 
            {/* <Step5/> */}
            
            </>
        </appContext.Provider>
    );
}

export default Form;
