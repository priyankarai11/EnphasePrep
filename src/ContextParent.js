import { createContext } from "react";

export const user = createContext("sacc");
export const UserProvider = user.Provider;
export const UserConsumer = user.Consumer;