import React from 'react'
import Image from 'next/image'
import photo from "../public/phot01.jpg"

function Form() {
 


  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
   
   

<form action="/api/submit" method="POST" >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
       
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
     
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white p-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Submit
      </button>
    </form>


    <Image src={photo} alt="img" width={1000} height={200}/>
   
    </div>
  
    
   
   
  )
}

export default Form





//client side form with react hook form and yup validations//
// components/RegistrationForm.tsx

// "use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";

// interface FormValues {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//     .required("Name is required")
//     .min(2, "Name must be at least 2 characters"),
//   email: Yup.string()
//     .required("Email is required")
//     .email("Email is invalid"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(8, "Password must be at least 8 characters"),
//   confirmPassword: Yup.string()
//     .required("Confirm Password is required")
//     .oneOf([Yup.ref("password")], "Passwords must match"),
// });

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },reset
//   } = useForm<FormValues>({
//     resolver: yupResolver(validationSchema),
//   });

//   const onSubmit = (data: FormValues) => {
//     console.log(data);
//     reset()
//     // Handle form submission here, e.g., send data to server
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div>
//         <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//           Name
//         </label>
//         <input
//           id="name"
//           type="text"
//           {...register("name")}
//           className={`mt-1 block w-full px-3 py-2 border ${
//             errors.name ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm`}
//         />
//         {errors.name && (
//           <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//           Email
//         </label>
//         <input
//           id="email"
//           type="email"
//           {...register("email")}
//           className={`mt-1 block w-full px-3 py-2 border ${
//             errors.email ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm`}
//         />
//         {errors.email && (
//           <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//           Password
//         </label>
//         <input
//           id="password"
//           type="password"
//           {...register("password")}
//           className={`mt-1 block w-full px-3 py-2 border ${
//             errors.password ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm`}
//         />
//         {errors.password && (
//           <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//           Confirm Password
//         </label>
//         <input
//           id="confirmPassword"
//           type="password"
//           {...register("confirmPassword")}
//           className={`mt-1 block w-full px-3 py-2 border ${
//             errors.confirmPassword ? "border-red-500" : "border-gray-300"
//           } rounded-md shadow-sm`}
//         />
//         {errors.confirmPassword && (
//           <p className="text-red-500 text-sm mt-1">
//             {errors.confirmPassword.message}
//           </p>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 px-4 rounded-md"
//       >
//         Register
//       </button>
//     </form>
//   );
// };

// export default Form;
