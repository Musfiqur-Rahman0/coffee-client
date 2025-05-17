import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";

const useAuth = () => {
  const singUP = async (email, password, navigate) => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      Swal.fire({
        title: "Registation  completed please login to continue",
        icon: "success",
      });
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };
  const login = async (email, password, navigate) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        title: "Login successfull",
        icon: "success",
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        title: "Login failed! Invalid email/password",
        icon: "error",
      });
    }
  };
  return {
    singUP,
    login,
  };
};

export default useAuth;
