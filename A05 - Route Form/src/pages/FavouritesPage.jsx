import React from "react";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  id: z.coerce.number().min(1).max(100),
  query: z.enum(["love", "like"]),
  size: z.enum(["small", "medium", "large"]),
});

function FavouritesPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      query: "",
      size: "",
    },
  });

  const handleOnSubmit = (formData) => {
    const result = formSchema.safeParse(formData);

    const { id, query, size } = formData;
    if (result.success) {
      navigate(`/fav/${id}?q=${query}&size=${size}`);
    } else {
      console.error(result.error);
    }
  };

  return (
    <div className="mx-auto max-w-3xl font-mono">
      <form className="space-y-8" onSubmit={handleSubmit(handleOnSubmit)}>
        <label className="flex flex-col gap-4">
          <span className="font-semibold">ID</span>
          <input
            className="border-2 px-4 py-2"
            type="number"
            {...register("id")}
          />
          {errors.id && (
            <span className="text-red-600">{errors.id.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-semibold">Query</span>
          <select className="border-2 px-4 py-2" {...register("query")}>
            <option value="">Select</option>
            <option value="love">Love</option>
            <option value="like">Like</option>
          </select>
          {errors.query && errors.query.type === "invalid_enum_value" && (
            <span className="text-red-600">
              Please select either love or like
            </span>
          )}
        </label>
        <label className="flex flex-col gap-4">
          <span className="font-semibold">Size</span>
          <select className="border-2 px-4 py-2" {...register("size")}>
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
          {errors.size && errors.size.type === "invalid_enum_value" && (
            <span className="text-red-600">
              Please select either small, medium or large
            </span>
          )}
        </label>
        <button
          type="submit"
          className="w-full border-2 px-4 py-2 font-semibold transition hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FavouritesPage;
