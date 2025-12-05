"use client";

import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { FormEvent, useState } from "react";
import ILogin from "../../../../types/login";
import Link from "next/link";

function Login() {
  const [login, setLogin] = useState<ILogin>({
    username: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(login);
  };

  return (
    <div className="w-full flex justify-center items-center overflow-hidden p-6 h-[calc(100vh-64px)]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-6 rounded-lg bg-white shadow-md w-full max-w-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">نام کاربری</label>
          <Input
            type="text"
            id="username"
            name="username"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">رمز ورود</label>
          <Input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>

        <Button className="bg-gray-400 cursor-pointer" type="submit">
          ورود
        </Button>

        {/* لینک‌های فراموشی رمز و ثبت نام */}
        <div className="flex justify-between text-sm mt-2">
          <Link
            href="/forgot-password"
            className="text-gray-400 hover:underline"
          >
            فراموشی رمز ورود؟
          </Link>

          <Link href="/register" className="text-gray-400 hover:underline">
            ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
