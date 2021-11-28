import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  username: String;
  password: String;
}

import { Container } from "./styles";

export default function SignIn() {
  const navigate = useNavigate();
  const { 
    register, handleSubmit, formState: { errors }, getValues 
  } = useForm<IFormInput>();
  
  function onSubmit() {
    console.log(getValues())

    navigate('/')
  };

  return (
    <Container>
      <aside className="sign-in__aside">
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="sign-in__form"
        >
          <label 
            htmlFor="signInUsername" 
            className="sign-in__label"
          >
            Usuário:
          </label>
          <input 
            id="signInUsername"
            className={`sign-in__input${errors.username 
              ? " sign-in__input--error" 
              : ""}`}
            {...register("username", { required: true })} 
          />
          <label 
            htmlFor="signInPassword"
            className="sign-in__label"
          >
            Senha:
          </label>
          <input 
            id="signInPassword"
            className={`sign-in__input${errors.password 
              ? " sign-in__input--error" 
              : ""}`}
            type="password" 
            {...register("password", { required: true })} 
          />
          {(errors.username || errors.password) && (
            <span className="sign-in__alert">
              Os campos são obrigatórios!
            </span>
          )}
          <button 
            className="sign-in__submit"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </aside>
    </Container>
  )
}