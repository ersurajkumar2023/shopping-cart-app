import React, { useEffect, useState } from 'react'
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([])

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData();
  },[])
  return (
    <>
      <div
        className={`${loading && "flex justify-center items-center h-screen"}`}
      >
        {loading ? (
          <>
            <div className="">
              <Spinner />
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[100px] lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {posts.length > 0 ? (
              <>
                {posts.map((post) => (
                  <Product key={post.id} post={post} />
                ))}
              </>
            ) : (
              <>
                <div className='flex justify-center items-center'>
                  <p className="">Data not found</p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home