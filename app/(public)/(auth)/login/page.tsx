"use client";

import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { FormEvent, useState } from "react";
import ILogin from "../../../../types/login";

function Login() {
  const [login, setLogin] = useState<ILogin>({ username: "", password: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // جلوگیری از رفرش
    console.log(login);
  };
  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border p-4 rounded-lg mx-auto bg-gray-300 w-full max-w-sm"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">نام کاربری</label>
          <Input
            type="text"
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            id="username"
            name="username"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">رمز ورود</label>
          <Input
            type="password"
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            id="password"
            name="password"
          />
        </div>

        <Button className="bg-gray-400 cursor-pointer" type="submit">
          ورود
        </Button>
      </form>
    </div>
  );
}

export default Login;
