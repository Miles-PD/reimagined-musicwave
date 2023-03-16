import { useState } from "react";

import Logo from '../assets/icon.png'

const Signup = () => {

    const [email, setEmail] = useState<string>('')

    return (
        <div className="flex grow justify-center">
            <div>
                <div className="flex flex-row pt-3 m-0">
                    <div className="w-5/12 mx-auto pl-2 sm:pl-0 pr-2 sm:pr-0 mb-0">
                        <div className="text-center pt-0 pb-2 sm:pb-1">
                            <img src={Logo} className="inline-block object-contain" />
                        </div>

                        <div className="text-center sm:mt-1">
                            <p className="text-2xl">
                            Log in to manage your account
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mt-4">
                    <div className="">
                        <div className="rounded flex justify-center bg-gray-800 mx-auto w-2/4 p-[40px] pt-8 sm:p-10">
                            <form>
                                <input
                                    className="rounded"
                                    type="email"
                                    id="email" 
                                    name="email"
                                    placeholder="email"
                                    required={true}

                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup;