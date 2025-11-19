'use client'
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const senha = formData.get("senha") as string;

    authClient.signIn.email({
      email: email,
      password: senha
    },
    {
      onSuccess: () => redirect("/painel"),
      onRequest: () => setLoading(true),
      onResponse: () => setLoading(false),
      onError: (ctx) => setError(ctx.error.message)
    })
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input 
          id="email"
          name="email" 
          type="email"
          placeholder="seu@email.com"
          required
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="senha">Senha</Label>
        <Input 
          id="senha"
          name="senha" 
          type="password"
          placeholder="Sua senha"
          required
          disabled={loading}
        />
      </div>

      <Button 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? "Entrando..." : "Entrar"}
      </Button>

      {error && (
        <div className="text-sm text-destructive bg-destructive/15 p-3 rounded-md">
          {error}
        </div>
      )}
    </form>
  )
}