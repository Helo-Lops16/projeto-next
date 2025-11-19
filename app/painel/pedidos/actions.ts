'use server'

import prisma from '@/lib/prisma-client'
import { revalidatePath } from 'next/cache'

export async function criarProduto(formData: FormData) {
  const nome = formData.get('nome') as string
  const preco = parseFloat(formData.get('preco') as string)
  const descricao = formData.get('descricao') as string
  const categoriaId = formData.get('categoriaId') as string

  if (!nome || !preco || !categoriaId) {
    return { error: 'Nome, preço e categoria são obrigatórios' }
  }

  try {
    await prisma.produtos.create({
      data: {
        nome,
        preco,
        descricao,
        categoriaId,
      },
    })

    revalidatePath('/painel/produtos')
    return { success: true }
  } catch (error) {
    console.error('Erro ao criar produto:', error)
    return { error: 'Erro ao criar produto' }
  }
}

export async function editarProduto(id: string, formData: FormData) {
  const nome = formData.get('nome') as string
  const preco = parseFloat(formData.get('preco') as string)
  const descricao = formData.get('descricao') as string
  const categoriaId = formData.get('categoriaId') as string

  if (!nome || !preco || !categoriaId) {
    return { error: 'Nome, preço e categoria são obrigatórios' }
  }

  try {
    await prisma.produtos.update({
      where: { id },
      data: {
        nome,
        preco,
        descricao,
        categoriaId,
      },
    })

    revalidatePath('/painel/produtos')
    return { success: true }
  } catch (error) {
    console.error('Erro ao editar produto:', error)
    return { error: 'Erro ao editar produto' }
  }
}

export async function excluirProduto(id: string) {
  try {
    await prisma.produtos.delete({
      where: { id },
    })

    revalidatePath('/painel/produtos')
    return { success: true }
  } catch (error) {
    console.error('Erro ao excluir produto:', error)
    return { error: 'Erro ao excluir produto' }
  }
}