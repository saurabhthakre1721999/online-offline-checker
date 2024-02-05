import React, { useState, useEffect } from "react";

const Localform = () => {
  const [Users, SetUsers] = useState({
    firstname: "",
    lastname: "",
    Email: "",
  });
  const [status, setstatus] = useState(false);
  const oninputchange = (e) => {
    const { name, value } = e.target;

    SetUsers({ ...Users, [name]: value });
    console.log("spread", { ...Users });
  };
  useEffect(() => {});
  return (
    <>
      <form action="">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={Users.firstname}
          id=""
          onChange={oninputchange}
        />{" "}
        <br /> <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={Users.lastname}
          id=""
          onChange={oninputchange}
        />{" "}
        <br /> <br />
        <label htmlFor="Email">Email</label>
        <input
          type="mail"
          name="Email"
          value={Users.lastname}
          id=""
          onChange={oninputchange}
        />
        <div>
          <button
            onClick={() => {
              setstatus(true);
            }}
          >
            click
          </button>
        </div>
        {status && <div> {Users.FirstName}</div>}
      </form>
    </>
  );
};
export default Localform;
