import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { signWithGoogle, login } = useContext(AuthContext);
  const loginUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message || "Something went wrong. Please try again.",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
        });
      });
  };
  const continueWighGoogle = () => {
    signWithGoogle()
      .then((res) => {
        console.log(res);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center my-[30px] bg-base-100 px-4">
      <form
        onSubmit={loginUser}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-6 shadow-md"
      >
        <legend className="fieldset-legend text-lg font-semibold">Login</legend>

        <label className="label mt-2">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          name="email"
          required
        />

        <label className="label mt-4">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Password"
          name="password"
          required
        />

        <button className="btn btn-neutral w-full mt-6">Login</button>

        <div className="divider">OR</div>

        <button
          onClick={continueWighGoogle}
          className="btn w-full bg-white text-black hover:bg-gray-100 border border-gray-300 mb-2"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>

   
      </form>
    </div>
  );
};

export default Login;
