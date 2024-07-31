// search.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

function Search() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Search query:", data?.query); // Add console log to check the query
    navigate(`/search/${data?.query}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center w-full max-w-lg"
    >
      <div className="relative flex-grow">
        <input
          className="w-full border border-[#212121] rounded-l-3xl bg-transparent py-2 pl-10 pr-3 placeholder-white outline-none focus:border-[#212121]"
          placeholder="Search"
          {...register("query", { required: true })}
        />
      </div>
      <button
        type="submit"
        className="bg-[#212121] text-white rounded-r-3xl px-5 py-[13px]  transition-colors"
      >
        <FaSearch />
      </button>
    </form>
  );
}

export default Search;
