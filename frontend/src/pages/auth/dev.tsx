import React from "react";
import { API_ADDRESS } from "src/config";

const Page = () => {
  return null;

  return (
    <div className="measure center pa4 ">
      <form className="flex" action={`${API_ADDRESS}/users/dev`} method="get">
        <input type="text" name="id" id="id" placeholder="id" />
        <input type="text" name="secret" id="secret" placeholder="secret" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Page;
