
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const AdminForm30PlusInput = () => {
    const schema = z.object({
        firstName: z.string().min(2, "First name must be at least 2 characters"),
        lastName: z.string().min(2, "Last name must be at least 2 characters"),
        Email: z.email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPasword: z.string().min(6, "Confirm Password must be at least 6 characters")
    }).refine((data) => data.password === data.confirmPasword, {
        message: "Passwords don't match",
         path: ["confirmPasword"],
    }
    );

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const fields = [
        { name: "firstName", label: "First Name" },
        { name: "lastName", label: "Last Name" },
        { name: "Email", label: "Email" },
        { name: "password", label: "Password" },
        { name: "confirmPasword", label: "Confirm Password" }
    ]


    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Admin Product form</h2>

                {fields.map((field) => (
                    <div key={field.name}>
                        <label>{field.label}</label>
                        <br />
                        <input {...register(field.name)}
                            style={{ border: "1px solid black" }} />
                        <br />
                        {errors[field.name] && <p style={{ color: "red" }}>{errors[field.name].message}</p>}

                    </div>
                ))}

                <button type='Submit'>Save</button>

            </form>
        </>
    )
}

export default AdminForm30PlusInput