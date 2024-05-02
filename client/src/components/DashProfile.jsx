import { Button, TextInput } from 'flowbite-react'
import { useSelector } from 'react-redux'

export default function DashProfile() {
    const { currentUser } = useSelector((state) => state.user)
    return (
        <div className='max-w-lg mx-auto p-3 w-full'>
            <h1 className='my-7 font-semibold text-center text-3xl'>Profile</h1>
            <form className='flex flex-col gap-4'>
                <div className="h-32 w-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
                    <img src={currentUser.profilePicture} alt="User Profile Picture" className='rounded-full border-8 w-full h-full object-cover border-[lightgray]' />
                </div>

                <TextInput type='text' id='username' defaultValue={currentUser.username} placeholder='username' />
                <TextInput type='email' id='email' defaultValue={currentUser.email} placeholder='email' />
                <TextInput type='password' id='password' placeholder='password' />

                <Button type='submit' gradientDuoTone={'purpleToBlue'} outline>Update</Button>
            </form>
<div className="text-red-500 flex justify-between mt-5">
    <span className='cursor-pointer'>Delete Account</span>
    <span className='cursor-pointer'>Sign Out</span>
</div>
        </div>
    )
}
