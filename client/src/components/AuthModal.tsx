import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Logo from '../assets/icon.png'
import axios from "axios";


interface FormFields {
    username: string;
    password: string;
  }

  interface FormError {
    username?: string;
    password?: string;
  }

const defaultFormFields = {
    username: "",
    password: "",
}

const AuthModal = () => {

    let navigate = useNavigate()

    const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
    const [isSignUp, setIsSignUp] = useState<boolean>(true);
    const [formErrors, setFormErrors] = useState<FormError>({});

    const handleValidation = () => {
        let error: FormError = {};

        if (!formFields.username) error.username = "Username is required!";
        if (formFields.username.length < 8) error.username = "Username must be at least 8 characters long."
        if (!formFields.password) error.password = "Password is required!";

        return error;
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formFields)

        try {
            const response = await axios.post('http://localhost:8080/api/v1/users/signup', { formFields })
            if (response.data) console.log(response)
            navigate ('/categories')
        } catch (error) {
            
        }
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
                                    <label className={`mb-1 text-xs ${formErrors.username ? 'text-rose-700' : ''}`}>{formErrors.username ? formErrors.username : 'Username'}</label>
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
                                    </div>

                                    <div>
                                        <label className={`mb-1 text-xs ${formErrors.password ? 'text-rose-700' : ''}`}>{formErrors.password ? formErrors.password : "Password"}</label>
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