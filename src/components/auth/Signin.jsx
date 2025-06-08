import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Signin = () => {
  const { createUserEmailPassword, update,signWithGoogle} = use(AuthContext);
  const register = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imgUrl = e.target.imgUrl.value;
    console.log(name, imgUrl);
    createUserEmailPassword(email, password)
      .then((res) => {
        console.log(res);
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
      .catch((err) => {
        console.log("User creation failed:", err.message);
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
  return (
  <div className="mt-[120px] mb-[60px]">
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
      required
    />

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
        <button onClick={continueWighGoogle} type="submit" className="btn btn-neutral mt-4 w-full">
      Continue Wigh Google
    </button>
  </form>
</div>

  );
};

export default Signin;
