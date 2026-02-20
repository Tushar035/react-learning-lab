import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormWithYup = () => {

  // ✅ Yup Schema
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters"),

    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters"),

    Email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),

    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    confirmPasword: yup
      .string()
      .required("Confirm Password is required")
      .min(6, "Confirm Password must be at least 6 characters")
      .oneOf([yup.ref("password")], "Passwords don't match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const fields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "Email", label: "Email" },
    { name: "password", label: "Password" },
    { name: "confirmPasword", label: "Confirm Password" },
  ];``

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Admin Form with Yup</h2>
    
      {fields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <br />

          <input
            {...register(field.name)}
            style={{ border: "1px solid black" }}
          />

          {errors[field.name] && (
            <p style={{ color: "red" }}>
              {errors[field.name]?.message}
            </p>
          )}
        </div>
      ))}

      <button type="submit">Save</button>
    </form>
  );
};

export default FormWithYup;