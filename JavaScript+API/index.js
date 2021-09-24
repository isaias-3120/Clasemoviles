function Leer() {
    const peli = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='65c74cf9ff4cbe5bf41e2a609aa3b767';
    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${peli}&appid=${key}&units=metric`
    buscar2(api_url);
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);


            
           // const {Search=[]} = resultado;
            
            //console.log(Search);
            document.getElementById("lista").innerHTML=`<h1>${resultado.main.temp}</h1>`;

            //Search.map((p)=>{
            //    document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
            //             <img width='100%' src=${p.Poster} alt="No hay poster"></img>
            //</div>`;
           // })
            
      });


}

const buscar2=async(api_url)=>{
    const peli = document.getElementById("input").value;
    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta.Search;
    console.log(respuesta);

    document.getElementById("lista").innerHTML=`<h1>Temperatura en ${peli} es ${respuesta.main.temp}</h1>
                        <h3>Temperatura minima: ${respuesta.main.temp_min}<h3>
                        <h3>Temperatura maxima: ${respuesta.main.temp_max}</h3>
                        <h4>Humedad: ${respuesta.main.humidity}</h4>
                        <h5>Presion: ${respuesta.main.pressure}</h5>`;
}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    const Search = await respuesta.data.Search;
    console.log(respuesta.data);
    
    console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                    <img width='100%' src=${p.Poster} alt="No hay poster"></img></div>`;
        })

    }

}    
