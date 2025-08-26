import { useState } from 'react'
import display from '../../../public/display/mickey.png'
const UserDisplay = () => {

    const [toggleList, setToggleList] = useState(false);

    return (
        <div
            className="fixed top-0 right-0 m-2 p-2 bg-primary text-white cursor-pointer
            hover:w-[200px] hover:h-[200px] transition-all duration-300 ease-in-out
            hover:rounded-sm hover:border-white
            hover:shadow-[0_0_24px_4px_rgba(255,255,255,0.08)]
            "
            onMouseEnter={() => setToggleList(true)}
            onMouseLeave={() => setToggleList(false)}
        >
            <div className="flex items-center justify-end space-x-2
        ">
                <div className="flex flex-row items-center gap-4 hover:borger-t-white hover:border-t-2 border-b-white hover:border-b-2">
                    <span className="font-medium">Username</span>
                    <img
                        src={display}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full"
                    />
                </div>

                {
                    toggleList && (
                        <div className="absolute top-16 right-2 w-48  text-gray-400  text-xs font-normal rounded-md shadow-lg p-4 z-50">
                            <hr className="border-gray-700 mb-2" />
                            <ul className="space-y-2">
                                <li className="hover:text-white p-2 rounded cursor-pointer">Profile</li>
                                <li className="hover:text-white p-2 rounded cursor-pointer">Settings</li>
                                <li className="hover:text-white p-2 rounded cursor-pointer">Logout</li>
                            </ul>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default UserDisplay