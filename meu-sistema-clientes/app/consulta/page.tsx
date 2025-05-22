'use client'
import { useEffect, useState } from 'react'

export default function ConsultaPage() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    fetch('/api/clientes')
      .then(res => res.json())
      .then(data => setClientes(data))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente: any) => (
          <li key={cliente.id} className="border-b py-2">
            <strong>{cliente.nome}</strong> - {cliente.produto} - {cliente.telefone}
          </li>
        ))}
      </ul>
    </div>
  )
}