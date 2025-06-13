import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signin = () => {
  const { createUserEmailPassword, update, signWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState([]);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const errorList = [];
    if (password.length < 6) {
      errorList.push("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errorList.push("Password must contain at least one uppercase letter.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorList.push("Password must contain at least one special character.");
    }
    if (!/[0-9]/.test(password)) {
      errorList.push("Password must contain at least one number.");
    }
    return errorList;
  };

  const register = (e) => {
    e.preventDefault();
    const validetorError = validatePassword(password);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password2 = e.target.password.value;
    const imgUrl = e.target.imgUrl.value;
    if (validetorError.length > 0) {
      setError(validetorError);
      return;
    }
    createUserEmailPassword(email, password2)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Welcome aboard! Your account has been created successfully.",
          confirmButtonText: "Continue",
          confirmButtonColor: "#3085d6",
          background: "#fff",
          color: "#333",
          allowOutsideClick: false,
        }).then(() => {
          navigate("/");
        });
        update({
          displayName: name,
          photoURL: imgUrl,
        })
          .then(() => {
            console.log("userCreate&update");
          })
          .catch((err) => {
            console.log("Update failed:", err.message);
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error?.message || "Something went wrong. Please try again.",

          confirmButtonText: "Try Again",
          confirmButtonColor: "#d33",
          background: "#fff",
          color: "#333",
          allowOutsideClick: false,
        });
      });
  };

  const continueWighGoogle = () => {
    signWithGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setPassword(e.target.value), setError([]);
  };
  return (
    <div className="mt-[30px] mb-[60px]">
      <form
        onSubmit={register}
        className="mx-auto bg-base-200 border-base-300 rounded-box w-full max-w-md border p-4"
      >
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Your Name"
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <ul className="text-red-600 text-sm mb-2 list-disc list-inside">
          {error.length > 0 &&
            error.map((item, id) => {
              return <li key={id}>{item}</li>;
            })}
        </ul>
        <label className="label">Image URL</label>
        <input
          type="text"
          name="imgUrl"
          className="input w-full"
          placeholder="Profile Image URL"
        />

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Register
        </button>
        <button
          onClick={continueWighGoogle}
          type="submit"
          className="btn btn-neutral mt-4 w-full"
        >
          Continue Wigh Google
        </button>
      </form>
    </div>
  );
};

export default Signin;
