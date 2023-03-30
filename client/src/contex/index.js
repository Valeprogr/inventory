import { useState, useEffect, createContext, useContext } from "react";

export const AppContext = createContext();
//Cosi posso Chiamarla piu Facilmente
export const useAppContex = () => useContext(AppContext);