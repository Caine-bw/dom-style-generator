//variables plan de travaille
let plan = document.querySelector('.plan')

//variables couleurs
let blanc = document.querySelector('.btn-grey')
let rouge = document.querySelector('.btn-danger')
let vert = document.querySelector('.btn-success')
let bleu = document.querySelector('.btn-primary')
let choisir = document.querySelector('.choisir')

//fonctionnement des couleurs

blanc.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#FFFFFF'
})

rouge.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#990000'
})

vert.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#33CC33'
})

bleu.addEventListener('click', ()=>{
    plan.style.backgroundColor = '#0066FF'
})

choisir.addEventListener('click', ()=> {
    plan.style.backgroundColor = choisir.value
})
//type de bordure

let gras = document.querySelector('.gras')
let ligne = document.querySelector('.trait')
let fin = document.querySelector('.fin')

//fonctionement des bordures

gras.addEventListener('click', ()=>{
    plan.style.border = 'thick solid black'
})

ligne.addEventListener('click', ()=>{
    plan.style.border = 'dashed 5px'
})

fin.addEventListener('click', ()=>{
    plan.style.border = ''
})
//bordures top colorés

let topVide = document.querySelector('.top0')
let topFin = document.querySelector('.top1')
let topGras = document.querySelector('.top2')

topVide.addEventListener('click', ()=>{
    plan.style.borderTop = ''
})

topFin.addEventListener('click', ()=>{
    plan.style.borderTop = 'solid red'
})

topGras.addEventListener('click', ()=>{
    plan.style.borderTop = 'solid red 8px'
})

//input qui change la taille de la bordure

let ipt1 = document.querySelector('.ipt1')
let ipt2 = document.querySelector('.ipt2')
let ipt3 = document.querySelector('.ipt3')
let ipt4 = document.querySelector('.ipt4')
let ipt5 = document.querySelector('.ipt5')

//foncitonnement des changement de bordures
ipt1.addEventListener('click', ()=>{
    plan.style.border = `solid black ${ipt1.value}px`
})
ipt2.addEventListener('click', ()=>{
    plan.style.borderTop = `solid black ${ipt2.value}px`
})
ipt3.addEventListener('click', ()=>{
    plan.style.borderRight = `solid black ${ipt3.value}px`
})
ipt4.addEventListener('click', ()=>{
    plan.style.borderBottom = `solid black ${ipt4.value}px`
})
ipt5.addEventListener('click', ()=>{
    plan.style.borderLeft = `solid black ${ipt5.value}px` 
})

//changer le border radius

let ipt6 = document.querySelector('.ipt6')
let ipt7 = document.querySelector('.ipt7')
let ipt8 = document.querySelector('.ipt8')
let ipt9 = document.querySelector('.ipt9')
let ipt10 = document.querySelector('.ipt10')

//fonctionnement des radius
ipt6.addEventListener('click', ()=>{
    plan.style.borderRadius = `${ipt6.value}px`
})
ipt7.addEventListener('click', ()=>{
    plan.style.borderTopLeftRadius = `${ipt7.value}px`
})
ipt8.addEventListener('click', ()=>{
    plan.style.borderTopRightRadius = `${ipt8.value}px`
})
ipt9.addEventListener('click', ()=>{
    plan.style.borderBottomRightRadius = `${ipt9.value}px`
})
ipt10.addEventListener('click', ()=>{
    plan.style.borderBottomLeftRadius = `${ipt10.value}px`
})

