import React, { useEffect, useState, useContext } from "react";
import WishListPage from "../pages/WishListPage";
import { AuthContext } from "../context/AuthContext";
import NotFound from "../pages/NotFound";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Swal from "sweetalert2";

const WishList = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [wishlist, setWishlist] = useState([]);
  
  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(
      `https://abulhasem-blog-server.vercel.app/all-wishlist?email=${user.email}`,
      {
        method: "GET",
        credentials: "include",
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch wishlist");
        }
        return res.json();
      })
      .then((data) => {
        setWishlist(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [user?.email]);

  const handleRemove = async (id) => {
    try {
      const res = await fetch(
        `https://abulhasem-blog-server.vercel.app/wish-list-remove/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete item");
      }
      Swal.fire({
        icon: "success",
        title: "Blog Deleted!",
        text: "The blog post has been deleted successfully.",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      }).then((res) => {
        if (res.isDismissed) {
          setWishlist((prev) => prev.filter((item) => item._id !== id));
        }
      });
    } catch (err) {
      console.error("Remove error:", err);
      setError("Failed to remove item.");
    }
  };

  if (error) {
    return (
      <div className="mt-8 text-red-500 text-center">
        <NotFound res={error} />
      </div>
    );
  }

  return (
    <div className="mt-12 mx-[2%]">
      <h2 className="font-Poppins text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-semibold">
        Your Wish List Items ({wishlist.length})
      </h2>

      {loading ? (
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {Array(2)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-2xl shadow-md   flex flex-col md:flex-row gap-6 h-[250px]"
                >
                  {/* Image Skeleton */}
                  <div className="w-full md:w-1/3 h-[200px] md:h-full">
                    <Skeleton
                      height="100%"
                      width="100%"
                      borderRadius="0.5rem"
                    />
                  </div>

                  {/* Text Skeleton */}
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div className="space-y-2">
                      <Skeleton height={16} width="40%" />
                      <Skeleton height={24} width="70%" />
                      <Skeleton height={14} width="30%" />
                      <Skeleton height={14} width="90%" />
                      <Skeleton height={14} width="50%" />
                    </div>

                    {/* Button Skeletons */}
                    <div className="flex gap-4 mt-4">
                      <Skeleton height={36} width="100px" />
                      <Skeleton height={36} width="100px" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : wishlist.length === 0 ? (
        <p className="mt-6 text-gray-500">No wishlist items found.</p>
      ) : (
        <div className="grid lg:grid-cols-2 gap-12 mt-6">
          {wishlist.map((item) => (
            <WishListPage key={item._id} blog={item} getId={handleRemove} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
