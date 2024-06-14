import React from 'react'
import FormSubmitBtn from './FormSubmitBtn'

function Form() {
  return (
    <div className='text-center flex flex-col gap-12'>
        <h2 className='text-2xl font-bold'>REQUEST A QUOTE</h2>
        <form action="" className='flex flex-col flex-wrap items-center m-auto gap-8'>
        <div className='flex flex-col sm:flex-row gap-8 w-full'>
            <input type="text" placeholder="First Name" required className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Last Name" required  className="input input-bordered w-full max-w-xs" />
        </div>
        <div className='flex flex-col sm:flex-row gap-8 w-full'>
            <input type="email" placeholder="Email" required  className="input input-bordered w-full max-w-xs" />
            <input type="tel" placeholder="Phone Number" required  className="input input-bordered w-full max-w-xs" />
        </div>
        <textarea className="textarea textarea-bordered w-full" required  placeholder="How Can We Help You!"></textarea>
        <div className='w-full'>
            <FormSubmitBtn />
        </div>
        </form>
    </div>
  )
}

export default Form