const fields = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "Email", labeL: "Email" },
    { name: "password", label: "Password" },
    { name: "confirmPasword", label: "Confirm Password" }
]

import { useForm } from 'react-hook-form';


const AdminForm30PlusInput = () => {
    const { register, handleSubmit } = useForm();

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

                    </div>
                ))}

                <button type='Submit'>Save</button>

            </form>
        </>
    )
}

export default AdminForm30PlusInput