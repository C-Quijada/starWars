document.addEventListener('DOMContentLoaded', function () {
    paginadores = document.querySelectorAll('.paginador')
    for(elemento of paginadores){
        elemento.addEventListener('mouseover', function(){
            let contenedor = document.getElementById("linea_"+objetivoPrint)
            if(!contenedor){
                console.log('estoy vacio')
                getApi()
            }else{
                console.log('no estoy vacio')
            }
        })
    }
})

var objetivoPrint = 0;
var cont = 0 


function getApi(){   

    for(x = 0 ; x < 5; x++ ){
        cont++
     consulta(cont)
    }
    
    objetivoPrint++
}


function consulta(objetivo){
    fetch(`http://swapi.dev/api/people/${objetivo}`)
        .then(response => response.json())
        
        .then(data=> {
        console.log(data)

          console.log(card(data))

        })
        .catch(error => {
            console.log(error)
        })


    
}



function card(objeto ){
    let elemento =       `<div class="col-12 col-md-6 col-lg-4">
                    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                        <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                            <div class="timeline-text">
                                <h6>${objeto.name}</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>`

                return elemento
        
}


//obtener la cantidad de paginas usarem,os para navegar por todos los personajes

