import { useState } from "react";

interface Usuario {
  nome: string;
  idade: number;
  email: string;
  hobbies: string[];
}

function FormularioPerfilUsuario() {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    idade: 0,
    email: "",
    hobbies: [],
  });

  const handleChange = (e: any) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: name === "idade" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      ...data,
      hobbies:
        typeof data.hobbies === "string"
          ? (data.hobbies as string).split(",")
          : prevUsuario.hobbies,
    }));

    setUsuario({
        nome: "",
        idade: 0,
        email: "",
        hobbies: [],
    })
  };

  return (
    <div className="app">
      <form className="FormularioUsuario" onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={usuario.nome}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Idade:</label>
          <input
            type="number"
            name="idade"
            value={usuario.idade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={usuario.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Hobbies (Separado por virgula)</label>
          <input
            type="text"
            name="hobbies"
            value={usuario.hobbies.join(",")}
            onChange={(e: any) => {
              const { value } = e.target;
              console.log(usuario.hobbies)
              setUsuario((prevUsuario) => ({
                ...prevUsuario,
                hobbies: value.split(",").map((hobby:string)=>hobby.trim())
              }));
            }}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioPerfilUsuario;
