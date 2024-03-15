import React from "react";
import { useForm } from "react-hook-form";

import {  toast } from 'react-toastify';
interface FormData {
  name: string;
  email: string;
  collegeId: string;
  number: string;
}

const Register: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // Handle form submission
  const onSubmit = (data: FormData) => {
    console.log(data);
    //handel register request here//
    try {
      // Make a POST request to your login endpoint with form data
     // const response = await axios.post("/api/adduser", data);

      // Assuming your login API returns a success message or token
     // console.log(response.data);

     toast.success('User Registered Successfully', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
     
    } catch (error) {
      // Handle login error
      console.error("Registeration failed:", error);
      toast.error('Registeration failed', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_fJYPAGpUZaUqR5L2YgbM0JuSlNpeik2Yg&usqp=CAU"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 outline-none px-2"
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  {...register("email", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 outline-none px-2"
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
            </div>
            <div>
              <label
                htmlFor="collegeId"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                College ID
              </label>
              <div className="mt-2">
                <input
                  id="collegeId"
                  type="text"
                  {...register("collegeId", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 outline-none px-2"
                />
                {errors.collegeId && <span className="text-red-500">College ID is required</span>}
              </div>
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile No.
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  type="tel"
                  {...register("number", { required: true })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 outline-none px-2"
                />
                {errors.number && <span className="text-red-500">Mobile No. is required</span>}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#4290f5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#0255c2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
