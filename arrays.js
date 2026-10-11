"use strict";
const listaViajes = [
    { id: 1, destino: "Cartagena", precio: 500, viajeros: 4, estado: "confirmado", guia: "Carlos" },
    { id: 2, destino: "Medellín", precio: 500, viajeros: 2, estado: "pendiente" },
    { id: 3, destino: "Bogotá", precio: 250, viajeros: 5, estado: "confirmado", guia: "Ana" },
    { id: 4, destino: "Santa Marta", precio: 600, viajeros: 1, estado: "cancelado" }
];
const viajesMayor = listaViajes.filter((item) => item.precio >= 500);
listaViajes.map((item) => item.destino);
console.log("viajes superiores a 300 disponibles: ", viajesMayor);
