import { ChangeEvent, FormEvent, useState, useEffect } from "react";

import Logo from '../assets/icon.png'

interface FormFields {
    username: string;
    email: string;
    password: string;
    confirmPass: string;
  }

  interface FormError {
    username?: string;
    email?: string;
    password?: string;
  }

const defaultFormFields = {
    username: "",
    email: "",
    password: "",
    confirmPass: "",
}

const AuthModal = () => {

    const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [formErrors, setFormErrors] = useState<FormError>({});

    const handleValidation = () => {
        let error: FormError = {};

        if (!formFields.username) error.username = "Username is required!";
        if (!formFields.email) error.email = "Email is required!";
        if (!formFields.password) error.password = "Password is required!";

        return error;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormErrors(handleValidation());
    }

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="flex grow justify-center">
            <div>
                <div className="flex flex-row pt-3 m-0">
                    <div className="w-5/12 mx-auto pl-2 sm:pl-0 pr-2 sm:pr-0 mb-0">
                        <div className="text-center pt-0 pb-2 sm:pb-1">
                            <img src={Logo} className="inline-block object-contain" />
                        </div>

                        <div className="text-center sm:mt-1">
                            <p className="text-2xl font-bold">
                            {isSignUp ? 'Sign up' : "Login"}
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mt-4">
                    <div className="">
                        <div className="rounded flex justify-center bg-gray-800 mx-auto w-[475px] pt-8 sm:p-10">
                            <div className="">
                                <form className="mb-5" onSubmit={handleSubmit} noValidate>
                                    <div className="flex flex-col">

                                    <div>
                                    <label className="mb-1 text-xs">{formErrors.username}</label>
                                        <input
                                            className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] py-2 w-[395px] text-left bg-transparent caret-white border-b-[1px] border-transparent border-solid border-slate-400 transition-colors ease-in-out duration-300 focus:border-rose-300 focus:outline-none focus:bg-transparent focus:ring-transparent"
                                            type="text"
                                            id="username" 
                                            name="username"
                                            placeholder="Enter a username"
                                            value={formFields.username}
                                            onChange={handleValueChange}
                                            required={true}
                                           
                                        />
                                        <span className="font-bold text-lg">{formErrors.username}</span>
                                    </div>

                                    <div>
                                        <label className="mb-1 text-xs">{'Email address'}</label>
                                        <input
                                            className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] py-2 w-[395px] text-left bg-transparent caret-white border-b-[1px] border-transparent border-solid border-slate-400 transition-colors ease-in-out duration-300 focus:border-rose-300 focus:outline-none focus:bg-transparent focus:ring-transparent"
                                            type="email"
                                            id="email" 
                                            name="email"
                                            placeholder="Enter an email"
                                            value={formFields.email}
                                            onChange={handleValueChange}
                                            required={true}
                                           
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 text-xs">Password</label>
                                        <input
                                            className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] py-2 w-[395px] text-left bg-transparent caret-white border-b-[1px] border-transparent border-solid border-slate-400 transition-colors ease-in-out duration-300 focus:border-rose-300 focus:outline-none focus:bg-transparent focus:ring-transparent"
                                            type="password"
                                            id="password" 
                                            name="password"
                                            placeholder="Enter a password"
                                            value={formFields.password}
                                            onChange={handleValueChange}
                                            required={true}
                                           
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 text-xs">Confirm password</label>
                                        <input
                                            className="autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,0)] py-2 w-[395px] text-left bg-transparent caret-white border-b-[1px] border-transparent border-solid border-slate-400 transition-colors ease-in-out duration-300 focus:border-rose-300 focus:outline-none focus:bg-transparent focus:ring-transparent"
                                            type="password"
                                            id="password-check" 
                                            name="confirmPass"
                                            placeholder="Confirm password"
                                            value={formFields.confirmPass}
                                            onChange={handleValueChange}
                                            required={true}
                                           
                                        />
                                    </div>

                                        <button className="bg-sky-500 mt-5 rounded py-4" type="submit">Submit</button>
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

export default AuthModal;