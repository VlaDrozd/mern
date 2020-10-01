import { useState, useEffect, useContext } from "react";
import useHttp from "./http.hook";
import { useToast } from "./toast.hook";
import { AuthContext } from './../context/AuthContext';

export default function useForm() {
  const [form, setForm] = useState({
    email: "",
    pass: "",
  });
  const { loading, request, error, clearError } = useHttp();
  const message = useToast();
  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);
  const auth = useContext(AuthContext);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const register = async () => {
    try {
      await request("/api/auth/register", "POST", { ...form }, {});
      setForm({email: '', pass: ''})
    } catch (error) {

    }
  };

  const signIn = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form }, {});
      setForm({email: '', pass: ''})
      auth.signIn(data.token, data.userId)
    } catch (error) {

    }
  };

  return {
    inputEmail: {
      value: form.email,
      onChange: changeHandler,
    },
    inputPass: {
      value: form.pass,
      onChange: changeHandler,
    },
    register: {
      onClick: register,
      disabled: loading,
    },
    signIn: {
      onClick: signIn,
      disabled: loading,
    },
  };
}
