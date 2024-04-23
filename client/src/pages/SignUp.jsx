import {Link} from 'react-router-dom';
import {Button, Label, TextInput} from 'flowbite-react';


export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex m-3 max-w-3xl mx-auto flex-col gap-5 md:flex-row md:items-center">
        <div className="flex-1">
        <Link to="/" className='text-4xl  font-bold dark:text-white'>
        <span className='px-1.5 py-1 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg mr-1'>Mern</span>
        BLogs</Link>
        <p className='text-sm mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt in, explicabo quo distinctio beatae nemo sunt odit dolores ad saepe quidem cum totam ipsa ea autem non porro? Quaerat, voluptatem excepturi?</p>
        </div>
        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div>
            <Label value='Username'/>
            <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
            <Label value='Email'/>
            <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
            <Label value='Password'/>
            <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an Account? </span>
            <Link to='/sign-in' className='text-blue-500'> Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
