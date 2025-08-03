import React from 'react'
import Input from '../Input';
import CommanBtn from '../Buttons/CommanBtn';
import { useForm } from 'react-hook-form';

function NotificationForm(
    {
        className='',
        ...props
    }
) {

    const {register, handleSubmit}  = useForm();
    function submit(data)
    {
console.log(data)
    }
    return (
   <>
       
<div class="  justify-center h-auto w-full ">

<div class="w-full">
    <div class="bg-stone-200 shadow-xl w-full rounded-lg py-3 flex-col justify-center items-center">
        <h2 className='text-center text-xl font-bold my-3'>Get Notification</h2>
        <form className='px-3' onSubmit={handleSubmit(submit)}>
            <Input 
            type='email'
           {...register("email",{
                    required:true
           })
           }
            label={"Email"} placeholder={"Enter email to get Notification"} 
            />
            <CommanBtn type='submit' className='w-full mt-3 bg-sky-300' title='Submit'></CommanBtn>
        </form>
           </div>
           </div>
           </div>
        </>
    );
}

export default NotificationForm
