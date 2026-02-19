import React from "react";
import { useForm } from "react-hook-form";

const RHFForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({mode: "onTouched"});

  const onSubmit = (data) => {
    console.log(data.name + data.email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Name : <input {...register("name", { required: true })} />
      {errors.name && <p>name required</p>}
      <br />
      Email : <input {...register("email", { required: true })} />
      {errors.email && <p>Email required</p>}
      <br />
      Password :{" "}
      <input
        {...register("password", {
          required: "Password required",
          minLength: { value: 6, message: "Minimum 6 chars" },
        })}
      />
      {errors.password && <p>{errors.password.message}</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RHFForm;
