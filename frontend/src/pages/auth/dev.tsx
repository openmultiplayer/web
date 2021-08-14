import React from "react";

const Page = () => {
  return (
    <div className="measure center pa4 ">
      <form
        className="flex"
        action={"http://localhost:8000/users/dev"}
        method="get"
      >
        <input type="text" name="id" id="id" placeholder="id" />
        <input type="text" name="secret" id="secret" placeholder="secret" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Page;
