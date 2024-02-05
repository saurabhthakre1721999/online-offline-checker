import React, { useState, useEffect } from "react";

const Localform = () => {
  const [Users, SetUsers] = useState({
    firstname: "",
    lastname: "",
    Email: "",
  });
  const [status, setstatus] = useState(false);
  const { firstname, lastname, Email } = Users;
  const oninputchange = (e) => {
    const { name, value } = e.target;
    SetUsers((pre) => ({ ...pre, [name]: value }));

    console.log("spread", { ...Users });
  };
  useEffect(() => {
    const form = JSON.parse(localStorage.getItem("newuser"));
    SetUsers((pre) => ({ ...pre, ...form }));
    console.log("afterlocalsave", form);
  }, []);
  useEffect(() => {
    if (firstname !== "" && lastname !== "" && Email !== "") {
      localStorage.setItem("newuser", JSON.stringify(Users));
    }
  }, [firstname, lastname, Email]);
  String;
  return (
    <>
      <form action="">
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstname}
          id=""
          onChange={oninputchange}
        />{" "}
        <br /> <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          name="lastname"
          value={lastname}
          id=""
          onChange={oninputchange}
        />{" "}
        <br /> <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="Email"
          value={Email}
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
        {status && <div> {firstname}</div>}
      </form>
    </>
  );
};
export default Localform;
