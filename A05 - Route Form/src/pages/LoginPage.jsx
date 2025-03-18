import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = (formData) => {
    const result = formSchema.safeParse(formData);

    if (result.success) {
      navigate(`/`);
    } else {
      console.error(result.error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl font-mono">
      <form className="space-y-8" onSubmit={handleSubmit(handleOnSubmit)}>
        <label className="flex flex-col gap-4">
          <span className="font-semibold">Email</span>
          <input
            className="border-2 px-4 py-2"
            type="text"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-semibold">Password</span>
          <input
            className="border-2 px-4 py-2"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-600">
              {errors.password.message.replace("String", "Password")}
            </span>
          )}
        </label>
        <button
          type="submit"
          className="w-full border-2 px-4 py-2 font-semibold transition hover:scale-105"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <NavLink
          to="/signup"
          className="underline decoration-dotted underline-offset-4 transition hover:font-semibold"
        >
          Sign up
        </NavLink>
      </p>
    </div>
  );
}

export default LoginPage;
