'use client'

import React, { useState } from "react";
import { Formik, Form, useField,Field } from "formik";
import * as Yup from "yup";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { Label, TextInput, Button,Textarea } from 'flowbite-react';


const packages = [
    {label:'Starter'},
    {label:'Essential'},
    {label:'Business'},
    {label:'Premium'},
]



const SrkSchema = Yup.object().shape({

name: Yup.string().required("Name Required"),
businessName: Yup.string().required("Business Name Required"),
email: Yup.string().required("Enter email").email("Enter valid email"),
mobile: Yup.string().required("Mobile Number Required"),
package: Yup.string().required("package Required"),
message: Yup.string().required("Message Required"),
city: Yup.string().required("City Required"),

})

export default function Forms (){

    const formdata = ({name:'',mobile:'',businessName:'',package:'', email: "", city: "",message:''})


  return (

    <>
  
   
<Formik
     
      initialValues={formdata}
      validationSchema={SrkSchema}
      onSubmit={async(values, { setSubmitting, resetForm }) => {
     

    //     const data = {

    //       name:values.name,
    //       designation:values.designation,
    //       companyName:values.companyName,
    //       email:values.email,
    //       phone:values.phone,
    //       package:values.package,
    //       message:values.message,
    //     }

      
    //       try{
    //         const status = await addForm('/api/feedback', data)
    //         if(status == 201){
    //         setSubmitting(false); 
    //         notify('Form Submited Succssfully','success')           
    //         resetForm()
         
    //         }

    //       }catch (error) {
    //         setSubmitting(false);  
    //         console.log(error.response.data['hydra:description'], 'warning'); 
    //       }

       }}
    >
      {({ values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue, }) => (
        <Form>
    
<div className="grid grid-cols-12 gap-2">

    <div className="col-span-6">
    <div className=" mb-4">
      <div className="mb-2 block">
        <Label htmlFor="name" value="Name" className="text-white" /><span className='text-red-500'>*</span></div>
      <TextInput
      id="name"
      name="name"
      type="text"
      sizing="lg"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      color={touched.name && Boolean(errors.name)?'failure':touched.name && Boolean(!errors.name)?'success':null}
      helperText={touched.name && errors.name}
       />
    </div>
    </div>

    <div className="col-span-6">
        <div className=" mb-4">
      <div className="mb-2 block">
        <Label htmlFor="businessName" value="Business Name" className="text-white"/><span className='text-red-500'>*</span></div>
      <TextInput
      id="businessName"
      name="businessName"
      type="text"
      sizing="lg"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.businessName}
      color={touched.businessName && Boolean(errors.businessName)?'failure':touched.businessName && Boolean(!errors.businessName)?'success':null}
      helperText={touched.businessName && errors.businessName}
       />
    </div>

        </div>



    <div className="col-span-6">
    <Label htmlFor="mobile" value="Mobile Number" className="text-white" /><span className='text-red-500'>*</span>
    <Field name="mobile">
            {() => (
              <PhoneInput
              country={"in"}
                enableSearch={true}
                value={values.mobile}
                inputProps={{ id: "mobile-input" }}
                inputStyle={{width:'100%'}}
                onChange={(value) => setFieldValue('mobile', value)}
                className='mt-1 w-full'
              />
            )}
            </Field>
          
            {touched.mobile && errors.mobile &&<div className="text-rose-600 text-sm">{errors.mobile}</div>}


        </div>

        <div className="col-span-6">
    <div className=" mb-4">
      <div className="mb-2 block">
        <Label htmlFor="name" value="Email" className="text-white" /><span className='text-red-500'>*</span></div>
      <TextInput
      id="email"
      name="email"
      type="text"
      sizing="lg"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      color={touched.email && Boolean(errors.email)?'failure':touched.email && Boolean(!errors.email)?'success':null}
      helperText={touched.email && errors.email}
       />
    </div>
    </div>

</div>




    

   


{/* <h3 className="text-sm text-gray-500 mt-4">Select package</h3>
<select
        name="package"
        className={` mt-1 block w-full py-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            touched.package && errors.package ? "border-red-500 bg-rose-200 focus:border-rose-500 focus:ring-rose-500" : ""
        }`}
        onChange={(e) => {setFieldValue('package', e.target.value)}}
        onBlur={handleBlur}
      >
   <option  className="text-gray-400 bg-white">
        Select package
        </option>
        {countries.map((option) => (
          <option key={option.code} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

       {touched.package && errors.package && (
              <p className="text-rose-600 text-sm">
              {errors.package}
              </p>
        )} */}



<div className=" mb-4">
      <div className="mb-2 block">
        <Label htmlFor="message" value="Message" className="text-white" /><span className='text-red-500'>*</span></div>
      <Textarea
      id="message"
      name="message"
      type="text"
      rows={5}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.message}
      color={touched.message && Boolean(errors.message)?'failure':touched.message && Boolean(!errors.message)?'success':null}
      helperText={touched.message && errors.message}
       />
    </div>






    <div className='pt-4'>
           <Button type="submit" gradientDuoTone="redToYellow" className="w-full" isProcessing={isSubmitting} >Submit</Button>
           </div>
        

        </Form>
      )}
    </Formik>

   </>   
  );
};


