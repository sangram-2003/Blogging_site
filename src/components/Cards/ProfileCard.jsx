import React from 'react'

function ProfileCard({

    image , 
    name , 
    about,
    address,
}) {
    return (
        <>
        
				<div class="  justify-center h-auto w-full ">

<div class="w-full">
    <div class="w-full bg-stone-200 overflow-hidden shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2 w-full">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
            </div>
           

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div>

        </div>
    </div>
</div>

</div>
        </>
    )
}

export default ProfileCard
