function resetFields(){
    document.getElementById("Input1").value='';
    document.getElementById("Input2").value='';
    document.getElementById("Input3").value='';
    document.getElementById("Input4").value='selecciona';
    document.getElementById("Input5").value='selecciona';
}

function createR() {
    document.getElementById("Input1").disabled = false;
    //Guardo los datos capturados usando el id de cada control
    var id = document.getElementById("Input1").value;
    var nombre = document.getElementById("Input2").value;
    var desarrollador = document.getElementById("Input3").value;
    var ESRB = document.getElementById("Input4").value;
    var vale = document.getElementById("Input5").value;


    //validaciones
    if (id.length > 0) {
        //creo un objeto que guarda los datos
        var juego = {
            id, //matricula:id
            nombre,
            desarrollador,
            ESRB,
            vale,
        }

        var lista_juegos=JSON.parse(localStorage.getItem("Juegos"));

        if(lista_juegos==null)
        { 
            var lista_juegos = [];
        }
        
        const existe = lista_juegos.some(element=>element.id==id); 

        if(!existe||document.getElementById("Input1").disabled==true)
        {
            
            if(document.getElementById("Input1").disabled==true)
            {
                var lista_juegos=lista_juegos.filter(juego=>juego.id!=id);

            }
                
            lista_juegos.push(juego);
            var temporal = lista_juegos.sort((a,b) => a.id-b.id);
            localStorage.setItem("Juegos", JSON.stringify(temporal));
            
            read();
            resetFields();
            swal("Listo!", "Agregado correctamente", "success");

        }
        else
        {
            swal("Error", "Ya existe ese id de ese juego","warning");
        }

    } 
    else 
    {
        swal("Error", "Llena todos los campos","warning");
    }

    document.getElementById("Input1").disabled = false;
    
}

function read(){
    document.getElementById("Table1").innerHTML='';
    

    const lista_juegos = JSON.parse(localStorage.getItem("Juegos"));
    
     
    if(lista_juegos)
    {
        lista_juegos.forEach((juego)=>printRow(juego));
    }
}


function printRow(juego){
    
    if(juego!=null){
        var table = document.getElementById("Table1"); 

        //creamos un nuevo elemento en la tabla en la ultima posicion
        var row = table.insertRow(-1);

        //Insertamos cada una de las celdas/columnas del registro
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        
        //Agregamos la informacion a cada una de las columnas del registro
        cell1.innerHTML = juego.id;
        cell2.innerHTML = juego.nombre; 
        cell3.innerHTML = juego.desarrollador
        cell4.innerHTML = juego.ESRB;
        cell5.innerHTML = juego.vale; 
        cell6.innerHTML = `<button type="button" class="btn btn-danger" onClick="deleteR(${juego.id})">Eliminar</button>`;
        cell7.innerHTML = '<button type="button" class="btn btn-success" onClick="seekR('+juego.id+')">Modificar</button>';
    }
}

function deleteR(id){
    const lista_juegos = JSON.parse(localStorage.getItem("Juegos"));
    var temporal=lista_juegos.filter(juegos=>juegos.id!=id);
    localStorage.setItem("Juegos", JSON.stringify(temporal));

    if(temporal.length==0)
    { 
        localStorage.removeItem("Juegos");
    }
  
    read();
    
}

function seekR(id){

    const lista_juegos = JSON.parse(localStorage.getItem("Juegos"));
    var juego=lista_juegos.filter(juego=>juego.id==id);
    //console.log(alumno[0]);
    updateR(juego[0]);
}

function updateR(juego){
    if(juego!=null)
    {
        document.getElementById("Input1").value=juego.id;
        document.getElementById("Input1").disabled = true;
        document.getElementById("Input2").value=juego.nombre;
        document.getElementById("Input3").value=juego.desarrollador;
        document.getElementById("Input4").value=juego.ESRB;
        document.getElementById("Input5").value=juego.vale;
    }
}


//Para consulta de carrera
function readQ(){
    document.getElementById("Table2").innerHTML='';
    var c = document.getElementById("Input6").value;
  
    const lista_juegos = JSON.parse(localStorage.getItem("Juegos"));
    var JuegosC=lista_juegos.filter(juego=>juego.vale==c);
    if(JuegosC)
    {
        JuegosC.forEach((juego)=>printRowQ(juego));
    }
    
    //console.log(alumnosC)

}


function printRowQ(juego){

    var table = document.getElementById("Table2"); 
    
    //creamos un nuevo elemento en la tabla en la ultima posicion
    var row = table.insertRow(-1);

    //Insertamos cada una de las celdas/columnas del registro
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    
    //Agregamos la informacion a cada una de las columnas del registro
    cell1.innerHTML = juego.id;
    cell2.innerHTML = juego.nombre; 
    cell3.innerHTML = juego.desarrollador;
    cell4.innerHTML = juego.ESRB;
    cell5.innerHTML = juego.vale; 
   
}