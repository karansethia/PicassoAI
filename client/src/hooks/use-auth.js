import { useContext } from "react";
import { AuthContext } from "../Context/auth-context"; 


export const useAuth = () => {
const context = useContext(AuthContext);
if(!context){
  throw new Error("useAuth must be used inside a Context Provider")
}
return context;

}