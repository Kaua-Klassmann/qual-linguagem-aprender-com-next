"use client";

export async function pegarItem(item) {
  const valor = localStorage.getItem(item);

  return valor;
}

export async function setarItem(item, valor) {
  localStorage.setItem(item, valor);
}

export async function clearItens() {
  localStorage.clear();
}
