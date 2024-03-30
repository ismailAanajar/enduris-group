import { upload } from "@/actions";
import React from "react";

function Admin() {
  return (
    <form action={upload}>
      <input type="file" name="file" id="file" />
      <button type="submit" className="bg-red-500">
        save
      </button>
    </form>
  );
}

export default Admin;
