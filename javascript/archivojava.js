

function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min)+min)
}

function eleccion (jugada){
    let resultado = ""

        if(jugada == 1){
            resultado= "Piedra 🗿"
        } else if(jugada == 2){
            resultado= "Papel 🧻"
        } else if(jugada == 3){
            resultado= "Tijera ✂️"
        }else{
            resultado = "MAL ELEGIDO"
        }

        return resultado
}

        //1 es piedra 2 es papel 3 es tijera
        let jugador = 0

        let triunfos = 0
        let perdidas = 0



        while (triunfos <3 &&perdidas <3){


        let pc = aleatorio (1,3)
        jugador = prompt ("elige 1 piedra, 2 papel, 3 tijera")



       alert("PC elige: " + eleccion(pc))
       alert ("Tu eliges: " + eleccion(jugador))
       //COMBATE
       //encontrar todas las maneras en que se pueden ganar

       if(pc==jugador){
        alert("Empate")
       } else if (jugador==1 && pc == 3){
        alert("Ganaste")
        triunfos = triunfos +1
       } else if (jugador == 2 && pc == 1){
        alert("Ganaste")
        triunfos = triunfos +1
       } else if (jugador == 3 && pc == 2){
        alert("Ganaste")
        triunfos = triunfos +1
       }else {
        alert ("Perdiste")
        perdidas=perdidas+1
       }

    }

    alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
            