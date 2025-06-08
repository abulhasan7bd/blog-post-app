import React, { use, useEffect, useState } from "react";
import WishListPage from "../pages/WishListPage";
import { AuthContext } from "../context/AuthContext";

const WishList = () => {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `http://localhost:5000/all-wishlist?email=${encodeURIComponent(
        user.email
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        console.log("Fetch error:", err.message);
      });
  }, [user,loading]);

  const getId = (id) => {
    fetch(`http://localhost:5000/wish-list-remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoading(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-[3rem] mx-[2%]">
      <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-[600]">
        Your Wish List Item ({data.length})
      </h2>
      <div className="grid lg:grid-cols-2 gap-[3rem]">
        {loading ? (
          <h3>Loadin data .....</h3>
        ) : (
          data.map((item, id) => {
            return (
              <WishListPage
                blog={item}
                key={id}
                getId={getId}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default WishList;
