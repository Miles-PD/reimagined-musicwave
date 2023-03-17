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
                            Sign up
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mt-4">
                    <div className="">
                        <div className="rounded flex justify-center bg-gray-800 mx-auto w-[475px] pt-8 sm:p-10">
                            <div className="">
                                <form className="mb-5">
                                    <div className="flex flex-col">
                                        <label className="mb-1 text-xs">Email</label>
                                        <input
                                            className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] py-2 w-[350px] text-left bg-transparent caret-white border-b-[1px] border-transparent border-solid border-slate-400 transition-colors ease-in-out duration-300 focus:border-rose-300 focus:outline-none focus:bg-transparent focus:ring-transparent"
                                            type="email"
                                            id="email" 
                                            name="email"
                                            placeholder="Enter an email address"
                                            required={true}
                                           
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Signup;