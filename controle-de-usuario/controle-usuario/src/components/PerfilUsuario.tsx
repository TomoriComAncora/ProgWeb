import { useState } from "react"

    interface Usuario{
        nome: string,
        idade: number,
        email: string,
        hobbies: string[],
    }

function PerfilUsuario() {
    const [usuario, setUsuario] = useState<Usuario>({
        nome: "Lucas",
        idade: 22,
        email: "lucas@teste.com",
        hobbies: ["jogar", "mexer no computador", "assistir"]
    })
  return (
    <div>PerfilUsuario
        <h2>{usuario.nome}</h2>
    </div>
  )
}

export default PerfilUsuario