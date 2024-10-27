"use client"
import React, { useEffect, useState } from "react";

const Perfil = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const res = await fetch(`/api/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Error al cargar los usuarios",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };
    cargarUsuarios();
  }, []);

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
