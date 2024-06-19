import React from 'react'
import FormSubmitBtn from './FormSubmitBtn'

function Form() {
  return (
    <div className='text-center flex flex-col gap-12'>
        <h2 className='text-2xl font-bold'>REQUEST A QUOTE</h2>
        <form action="https://api.web3forms.com/submit" method="POST" className='flex flex-col flex-wrap items-center m-auto gap-8'>
        <input type="hidden" name="access_key" value="5b05f2ae-1c9c-405a-92d9-840648b31621" />
        <input type="hidden" name="subject" value="Quote For Dahl Builders"></input>
        <input type="hidden" name="from_name" value="New Quote"></input>
        <div className='flex flex-col sm:flex-row gap-8 w-full '>
            <input name='first_name' type="text" placeholder="First Name" required className="input input-bordered w-full max-w-xs" />
            <input name='last_name' type="text" placeholder="Last Name" required  className="input input-bordered w-full max-w-xs" />
        </div>
        <div className='flex flex-col sm:flex-row gap-8 w-full'>
            <input name='email' type="email" placeholder="Email" required  className="input input-bordered w-full max-w-xs" />
            <input name='phone' type="tel" placeholder="Phone Number" required  className="input input-bordered w-full max-w-xs" />
        </div>
        <textarea name='message' className="textarea textarea-bordered w-full h-64" required  placeholder="How Can We Help You!"></textarea>
        <div className='w-full'>
            <FormSubmitBtn />
        </div>
        </form>
    </div>
  )
}

export default Form