import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <input
        className="border border-black p-2 m-2 rounded-md"
        type="text"
        placeholder="name"
      />
      <input
        className="border border-black p-2 m-2 rounded-md"
        type="text"
        placeholder="message"
      />
      <button className="border border-black p-2 m-2 bg-gray-200 rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default Contact;
