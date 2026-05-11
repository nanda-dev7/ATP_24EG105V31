import { useForm } from "react-hook-form";

function FormDemo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-6xl">Form Demo</h1>

      {/* Form Section */}
      <form
        className="max-w-md mx-auto mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Username */}
        <div className="mb-3">
          <label htmlFor="username">Username</label>

          <input
            type="text"
            id="username"
            className="border w-full"
            {...register("username", {
              required: "Username is required",
              validate: (v) =>
                v.trim().length !== 0 || "Whitespace is not allowed",
              minLength: {
                value: 5,
                message: "Username must be at least 5 characters",
              },
              maxLength: {
                value: 15,
                message: "Username must be at most 15 characters",
              },
            })}
          />

          {/* Error Message */}
          {errors.username && (
            <p className="text-red-600 mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email</label>

          <input
            type="text"
            id="email"
            className="border w-full"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />

          {/* Email Error */}
          {errors.email && (
            <p className="text-red-600 mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormDemo;