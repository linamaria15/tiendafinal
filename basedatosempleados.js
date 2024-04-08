let empleados=Array(
    {
        id:1,
        nombre:"Lina Maria Monsalve ",
        cargo:"Jefe",
        telefono:"3126727321",
        correo:"monsalvelina@gmail.com",
        salario:7500000,
        contactoEmergencia:"3216292090",
        foto:"./img/chiica.jpg"

    },
    {
        id:2,
        nombre:"Salome Mora ",
        cargo:"Gerente",
        telefono:"3115823697",
        correo:"morasalo@gmail.com",
        salario:5500000,
        contactoEmergencia:"3205268269",
        foto:"./img/emp1.webp"

    },
    {
        id:3,
        nombre:"Manuel Jose Henao",
        cargo:"Secretario",
        telefono:"3102539691",
        correo:"manuelh@gmail.com",
        salario: 1500000,
        contactoEmergencia:"3258796244",
        foto:"./img/emp3.jpg"

    },
    {
        id:4,
        nombre:"Maria Jose Toro ",
        cargo:"Aseadora",
        telefono:"3145698754",
        correo:"mariaj@gmail.com",
        salario:1300000,
        contactoEmergencia:"38845884545",
        foto:"./img/emp2.jpg"

    },
    {
        id:5,
        nombre:"Ana Cano Manco",
        cargo:"Directora comercial",
        telefono:"3102454587",
        correo:"anacm@gmail.com",
        salario:3500000,
        contactoEmergencia:"3215876855",
        foto:"./img/emp4.avif"

    },
    {
        id:6,
        nombre:"Juan Jose Gallego ",
        cargo:"Director de venta",
        telefono:"3158467520",
        correo:"jjosegallego@gmail.com",
        salario:4500000,
        contactoEmergencia:"3202568745",
        foto:"./img/emp5.avif"

    },
    {
        id:7,
        nombre:"Jose Maria Higuita ",
        cargo:"Recursos humanos",
        telefono:"3158798445",
        correo:"jmh@gmail.com",
        salario:2500000,
        contactoEmergencia:"3216254590",
        foto:"./img/emp6.webp"

    },
    {
        id:8,
        nombre:"Angela Arroyave ",
        cargo:"comunicaciones",
        telefono:"3204578944",
        correo:"angelaarroyave@gmail.com",
        salario:2500000,
        contactoEmergencia:"3258756985",
        foto:"./img/emp7.jpg"

    },
    {
        id:9,
        nombre:"Maria Elena Patiño",
        cargo:"Recepcionista",
        telefono:"3126727321",
        correo:"maelarpa@gmail.com",
        salario:3500000,
        contactoEmergencia:"3216292090",
        foto:"./img/emp8.jpg"

    },
    {id:10,
    nombre:"Juan Andres Monsalve",
    cargo:"CEO",
    telefono:"3196797760",
    correo:"monsalvejuan@gmail.com",
    salario:9500000,
    contactoEmergencia:"3218756980",
    foto:"./img/emp9.jpg"
    },
    {
        id:11,
        nombre:"Camila Ramirez ",
        cargo:"auxiliar de produccion",
        telefono:"318578852",
        correo:"camilar@gmail.com",
        salario:4500000,
        contactoEmergencia:"3225892090",
        foto:"./img/emp10.jpg"

    },
    {
        id:12,
        nombre:"Juan Pablo Montoya ",
        cargo:"administracion",
        telefono:"3125698754",
        correo:"jpmontoya@gmail.com",
        salario:4800000,
        contactoEmergencia:"3212598490",
        foto:"./img/emp12.jpg"

    },
    {
        id:13,
        nombre:"Yuri Tatiana Alzate",
        cargo:"creditos y cobros",
        telefono:"3002586785",
        correo:"yurialzate2@gmail.com",
        salario:7500000,
        contactoEmergencia:"3205824539",
        foto:"./img/emp13.jpg"


    },
    {
        id:14,
        nombre:"Mariangel Moscoso ",
        cargo:"contabilidad",
        telefono:"3502587416",
        correo:"moariangelm@gmail.com",
        salario:6200000,
        contactoEmergencia:"3205478965",
        foto:"./img/emp14.jpg"

    },
    {
        id:15,
        nombre:"Ana Maria Holguin",
        cargo:"Finanzas",
        telefono:"3105287412",
        correo:"anamariah@gmail.com",
        salario:4500000,
        contactoEmergencia:"3126776629",
        foto:"./img/emp15.webp"

    },
    {
        id:16,
        nombre:"Isaac carvajal",
        cargo:"Produccion",
        telefono:"3102589635",
        correo:"isaaccar@gmail.com",
        salario:3400000,
        contactoEmergencia:"3258756982",
        foto:"./img/emp16.jpg"

    },
    {
        id:17,
        nombre:"patricia restrepo ",
        cargo:"Conserje",
        telefono:"3217279780",
        correo:"patricia@gmail.com",
        salario:1500000,
        contactoEmergencia:"3246785420",
        foto:"./img/emp17.webp"

    },
    {
        id:18,
        nombre:"Yhojan Mauricio Mesa ",
        cargo:"Bodeguero",
        telefono:"31¿15496850",
        correo:"mauricioy@gmail.com",
        salario:2500000,
        contactoEmergencia:"3218547590",
        foto:"./img/emp18.jpg"

    },
    {
        id:19,
        nombre:"Jose Gabriel Restrepo ",
        cargo:"Jefe",
        telefono:"3102589652",
        correo:"monsalvelina@gmail.com",
        salario:8500000,
        contactoEmergencia:"3285478965",
        foto:"./img/emp19.png"


    },

    {id:20,
    nombre:"Luz Fanny Arroyave",
    cargo:"comercializacion",
    telefono:"3125789541",
    correo:"luzfanny@gmail.com",
    salario:2200000,
    contactoEmergencia:"3225939388",
    foto:"./img/emp20.webp"}
)
//creando una referenci al contenedor de empleados
let contenedor=document.getElementById("contenedor")
// pasos para crear una lista dinamica de elementos
//1.debo recorrer la base de datos del problema:
empleados.forEach(function (empleado){

   let columna=document.createElement("div")
   columna.classList.add("col")
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card","shadow")
   let foto=document.createElement("img")
   foto.classList.add("img-fluid","mx-auto","d-block")
   foto.src=empleado.foto

   let nombre=document.createElement("h3")
   nombre.textContent=empleado.nombre
   let cargo=document.createElement("h4")
   cargo.textContent=empleado.cargo
   let telefono=document.createElement("h4")
   telefono.textContent=empleado.telefono
   let correo=document.createElement("h4")
   correo.textContent=empleado.correo
   let salario=document.createElement("h4")
   salario.textContent=empleado.salario

   //se asocian las estructuras en orden logico
   
   tarjeta.appendChild(foto)
   tarjeta.appendChild(nombre)
   tarjeta.appendChild(cargo)
   tarjeta.appendChild(telefono)
   tarjeta.appendChild(correo)
   tarjeta.appendChild(salario)
   columna.appendChild(tarjeta)
   contenedor.appendChild(columna)
})