'use client'
import { useState } from 'react'

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    produto: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/clientes', {
      method: 'POST',
      body: JSON.stringify(form),
    })
    if (res.ok) {
      alert('Cliente cadastrado!')
      setForm({ nome: '', telefone: '', produto: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input type="text" placeholder="Nome" className="border p-2 w-full"
        value={form.nome}
        onChange={e => setForm({ ...form, nome: e.target.value })}
      />
      <input type="text" placeholder="Telefone" className="border p-2 w-full"
        value={form.telefone}
        onChange={e => setForm({ ...form, telefone: e.target.value })}
      />
      <input type="text" placeholder="Produto" className="border p-2 w-full"
        value={form.produto}
        onChange={e => setForm({ ...form, produto: e.target.value })}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Cadastrar</button>
    </form>
  )
}
