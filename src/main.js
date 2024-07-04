let continuar=true
while(continuar){
    let operador = prompt("Que operacion desea realizar: 1 - sumar || 2 - restar || 3 - multiplicar || 4 - multiplicar")
    let num1 = Number(prompt("Ingrese el primer numero"))
    let num2 = Number(prompt("Ingrese el segundo numero"))
    let resultado;
    
    function sumar(){
        resultado = num1+num2
        console.log("El resultado de la suma es "+resultado)
        alert(num1+"+"+num2+"="+resultado)
        return resultado
    }
    
    function restar(){
        resultado = num1-num2
        console.log("El resultado de la resta es "+resultado)
        alert(num1+"-"+num2+"="+resultado)
        return resultado
    }
    
    function multiplicar(){
        resultado = num1*num2
        console.log("El resultado de la multiplicaciòn es "+resultado)
        alert(num1+"*"+num2+"="+resultado)
        return resultado
    }
    
    function dividir(){
        resultado = num1/num2
        console.log("El resultado de la divisiòn es "+resultado)
        alert(num1+"/"+num2+"="+resultado)
        return resultado
    }
    
    if(operador==1){
        sumar()
    } else if(operador==2){
        restar()
    } else if (operador==3){
        multiplicar()
    } else if(operador==4){
        dividir()
    }
    let confirmacion = prompt("Desea realizar otro calculo? 1 - si || 2 - no")
    if(confirmacion == 2){
        continuar = false
        console.log("finalizado")
        alert("Gracias por elegir Calculator")
    }else if(confirmacion == 1){
        continuar = true
    }
}

