import lista from './dolgozok.json'

document.addEventListener("DOMContentLoaded", init);
function init(){

}
const ferfiak = lista.filter(szemely => szemely.nem == "férfi").length;
console.log(ferfiak)

const nok = lista.filter(szemely => szemely.nem == "nő").length;
console.log(nok)

const fizetesnagyobbmint150k = lista.filter(szemely => szemely.fizetes>150000);
console.log(`150k nál nagyobb fizetésel rendelkezők:`)
console.log(fizetesnagyobbmint150k)

const vezeteknevnagy = lista.filter(szemely => szemely.nev.includes("Nagy"));
console.log(`A nagy vezetéknevüek:`)
console.log(vezeteknevnagy)

const kiskoru = lista.filter(szemely => szemely.kor<18).map(szemely => ({ nev:  szemely.nev, fizetes: szemely.fizetes}));
console.log(`A Kiskorúak és fizetésük:${kiskoru}`)
console.log(kiskoru)