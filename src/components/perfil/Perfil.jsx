"use client";
import React from "react";
import { MoviesContext } from "@/context/MoviesContext";
import { useContext } from "react";

const Perfil = () => {
  const { users } = useContext(MoviesContext);
  
  return (
    <div>
      {users.map((user) => (
        <div key={user._id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.image}</p>
        </div>
      ))}
    </div>
  );
};

export default Perfil;
