import lista from './dolgozok.json'

document.addEventListener("DOMContentLoaded", init);
function init(){

}
const ferfiak = lista.filter(szemely => szemely.nem == "férfi").length;
console.log(ferfiak)

const nok = lista.filter(szemely => szemely.nem == "nő").length;
console.log(nok)

const fizetesnagyobbmint150k = lista.filter(szemely => szemely.fizetes>150000).map(szemely => szemely.id + ":"+ szemely.nev+ " "+szemely.nem+" "+ szemely.kor+" "+szemely.fizetes+"\n");
console.log(`150k nál nagyobb fizetésel rendelkezők:${fizetesnagyobbmint150k}`)

const vezeteknevnagy = lista.filter(szemely => szemely.nev.includes("Nagy")).map(szemely => szemely.id + ":"+ szemely.nev+ " "+szemely.nem+" "+ szemely.kor+" "+szemely.fizetes+"\n");
console.log(`A nagy vezetéknevüek:${vezeteknevnagy}`)

const kiskoru = lista.filter(szemely => szemely.kor<18).map(szemely =>szemely.nev+":"+szemely.fizetes+"\n");
console.log(`A Kiskorúak és fizetésük:${kiskoru}`)