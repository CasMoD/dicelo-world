/**
 * JS de Jogo do Dado
 * @autor Daniel Castro de Moraes
 */


function dadoX(faces) {
  const dado = Math.floor(Math.random() * faces + 1)
  document.getElementById(`resultado${faces}`).innerHTML = dado
}