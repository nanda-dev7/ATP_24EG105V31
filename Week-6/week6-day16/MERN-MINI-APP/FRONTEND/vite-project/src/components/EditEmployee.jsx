import React from 'react'
import {useLocation} from 'react-router-dom'

function EditEmployee() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  // get empObj from navigate hook
  const {state} =useLocation()

  useEffect(()=>{
    setValue("name", state.name);
     setValue("name", state.email);
      setValue("name", state.mobile);
       setValue("name", state.designation);
        setValue("name", state.companyName);
  },[]);
  





    //form submit
    const onFormSubmit = async (newEmpObj) => {
      try {
        setLoading(true);
        //make HTTP POST req
        let res = await fetch("https://empapp-zva5.onrender.com/employee", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmpObj),
        });
  
        if (res.status === 201) {
          //navigate to employees component programmatically
          navigate("/list");
        } else {
          let errorRes = await res.json();
        //   console.log("error response is ", errorRes);
          throw new Error(errorRes.message);
        }
      } catch (err) {
        console.log("err in catch", err);
        //deal with err
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    console.log(error);
  
    if (loading) {
      return <p className="text-center text-4xl">Loading....</p>;
    }
    if (error) {
      return <p className="text-red-500 text-center text-3xl">{error}</p>;
    }
  
    return (
      <div>
        <h1 className="text-5xl text-center text-gray-600">Edit Employee</h1>
        {/* form */}
        <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
          <input
            type="text"
            placeholder="Enter name "
            {...register("name")}
            className="mb-3  border-2 p-3 w-full rounded-2xl"
          />
          <input
            type="email"
            placeholder="Enter Email "
            {...register("email")}
            className="mb-3 border-2 p-3 w-full rounded-2xl"
          />
  
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="mb-3  border-2 p-3 w-full rounded-2xl"
          />
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation")}
            className="mb-3 border-2 p-3 w-full rounded-2xl"
          />
          <input
            type="text"
            placeholder="Enter name of the company"
            {...register("companyName")}
            className="mb-3 border-2 p-3 w-full rounded-2xl"
          />
  
          <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
            Save 
          </button>
        </form>
      </div>
    );
  }
  return (
    <div>EditEmployee</div>
  )


export default EditEmployee