import { BiErrorCircle } from 'react-icons/bi'

const Error = () => {
    return (
        <div className='flex flex-col gap-2 justify-center items-center min-h-screen bg-primary'>
            <BiErrorCircle className='text-[10rem] text-red-600' />
            <h1 className='text-white'>Something went wrong try checking out later or contact Gus for more info! </h1>
        </div>
    )
}

export default Error