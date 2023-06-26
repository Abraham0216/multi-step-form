import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { appContext } from "../Form";
import { useContext } from "react";
import ButtonsGroup from "../../buttonsGroup";




const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Enter a valid name')
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("This field is required"),
    phoneNumber: Yup.number()
        .integer('Enter a valid number')
        .typeError('Phone number must be valid')
        .max(999999999999, 'Too Long!')
        .min(2, "Too Short!")
        .required("This field is required"),
    email: Yup.string().email("Invalid email").required("This field is required"),
});

const Step1 = () => {

    const {indexProgress, setIndexProgress} = useContext(appContext);

    
    

    return (
        <div className="p-8 pb-2 lg:px-20">
            <h2 className="text-blue-950 text-3xl font-bold">Personal Info</h2>
            <p className="text-gray-600 py-4 mb-3">Please provide your name, email address, and phone number.</p>

            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phoneNumber: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                    setIndexProgress(prevIndex => prevIndex + 1)
                    
                    
                }}

            
            >
            
                {({ errors, touched,  formikProps  }) => (
                        
                    <Form>
                    <div className="mb-2 lg:mb-8">
                    <label className=" text-blue-950 text-sm flex justify-between font-bold mb-1.5" for="name">
                        Name
                        {errors.name && touched.name ? (
                            <>
                            <div className="text-red-500">{errors.name}</div>
                            </>
                        ) : null}
                    </label>
                        <Field className={`shadow  appearance-none border border-gray-300 focus:border-blue-900 text-blue-900  font-medium  rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'} `} placeholder="e.g. Stephen King" id="name" name="name" />
                        
                    </div>
                    <div className="mb-2 lg:mb-8">
                    <label className=" text-blue-950 text-sm flex justify-between font-bold mb-1.5" for="password">
                        Email Address
                        {errors.email && touched.email  ? (
                            <>
                            
                            
                            
                            <div className="text-red-500">{errors.email}</div>
                            </>
                        ) : null}
                    </label>
                        <Field className={`shadow  appearance-none border border-gray-300 focus:border-blue-900 text-blue-900  font-medium  rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline ${errors.email && 'border-red-500'} `} placeholder="e.g. stephenking@lorem.com" id="password" name="email" type='email' />
                        
                    </div>
                    <div className="mb-10 lg:mb-8">
                    <label className=" text-blue-950 text-sm flex justify-between font-bold mb-1.5" for="phoneNumber">
                        Phone Number
                        {errors.phoneNumber && touched.phoneNumber ? <><div className="text-red-500">{errors.phoneNumber}</div></>: null}
                        
                    </label>
                        <Field className={`shadow  appearance-none border border-gray-300 focus:border-blue-900 text-blue-900  font-medium  rounded w-full py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline ${errors.phoneNumber && 'border-red-500'} `} placeholder="e.g. +1 234 567 890" id="phoneNumber" name="phoneNumber" type='tel' />
                        </div>
                        
                            <ButtonsGroup indexProgress={indexProgress} setIndexProgress={setIndexProgress}  />
                        
                        
                        
                </Form>
                )}
                
            </Formik>
        </div>
    
    );
    
    
    
};





export default Step1;
