import React, { useState, useEffect, createContext, useRef } from "react";

// create user context
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [step, setStep] = useState("riwayat");
  const [line, setLine] = useState(1);
  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const [img, setImg] = useState({
    gambar_1: "",
    gambar_2: "",
    gambar_3: "",
    gambar_4: "",
    gambar_5: "",
    gambar_6: "",
    gambar_7: "",
    gambar_8: "",
    gambar_9: "",
    gambar_10: "",
    gambar_11: "",
    gambar_12: "",
    gambar_13: "",
    gambar_14: "",
    gambar_15: "",
  });

  const mgwbResult = (e) => {
    e.preventDefault();
    console.log(img);
  };

  const state = {
    step,
    setStep,
    line,
    setLine,
    img,
    setImg,
    clockRef,
  };

  const handleFunction = {
    mgwbResult,
    handleStart,
  };

  return (
    <UserContext.Provider value={{ state, handleFunction }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
