import { useState } from "react";

interface Usuario {
  nome: string;
  idade: number;
  email: string;
  hobbies: string[];
}

interface FormularioUsuarioProps {
  handleAddNovoUsuario: (usuario: Usuario) => void;
}

const FormularioUsuario: React.FC<FormularioUsuarioProps> = ({
  handleAddNovoUsuario,
}) => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: "",
    idade: 0,
    email: "",
    hobbies: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [name]: name === "idade" ? parseInt(value) : value,
    }));
  };

  const handleHobbyChange = (index: number, e: any) => {
    const novosHobbies = [...usuario.hobbies];
    novosHobbies[index] = e.target.value;
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      hobbies: novosHobbies,
    }));
  };

  const adicionarHobby = () => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      hobbies: [...prevUsuario.hobbies, ""],
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleAddNovoUsuario(usuario);
    setUsuario({
      nome: "",
      email: "",
      idade: 0,
      hobbies: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={usuario.nome}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Idade:</label>
        <input
          type="number"
          name="idade"
          value={usuario.idade}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={usuario.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Hobbies:</label>
        {usuario.hobbies.map((hobby, index) => (
          <input
            key={index}
            type="text"
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e)}
            className="hobby-input"
          />
        ))}
        <button
          type="button"
          onClick={adicionarHobby}
          className="add-hobby-button"
        >
          Adicionar Hobby
        </button>
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
};
