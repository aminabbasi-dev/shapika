"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { DevTool } from "@hookform/devtools";

interface IFormValues {
  username: string;
  email: string;
  password: string;
}

function RegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    console.log(data); // داده‌های فرم
  };

  return (
    <div className="flex items-center justify-center max-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md max-h-screen overflow-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">ثبت نام</h1>

        <form
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Username */}
          <label htmlFor="username" className="font-medium">
            نام کاربری
          </label>
          <Input
            id="username"
            {...register("username", { required: "نام کاربری لازم است" })}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {errors.username?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}

          {/* Email */}
          <label htmlFor="email" className="font-medium">
            ایمیل
          </label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "ایمیل اجباری است",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "ایمیل معتبر نیست",
              },
            })}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}

          {/* Password */}
          <label htmlFor="password" className="font-medium">
            رمز عبور
          </label>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "رمز عبور اجباری است",
              minLength: { value: 8, message: "حداقل 8 کاراکتر" },
            })}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {errors.password?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          {/* Submit */}
          <Button
            type="submit"
            className="bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition mt-2"
          >
            ثبت
          </Button>
        </form>

        <DevTool control={control} />
      </div>
    </div>
  );
}

export default RegisterForm;
