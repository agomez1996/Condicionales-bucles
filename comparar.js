function pi(){
    a = Math.PI
    b = a.toFixed(4)
    var m = parseInt(document.getElementById("m").value);
    ec=1
    for(i=1;i<=m;i++){
        ec=ec*(Math.pow((2*i),2))/((Math.pow(2*i,2))-1);

    }
    ec1=2*ec
    ec2 = ec1.toFixed(4)
    document.getElementById('respi').innerHTML="La ecuacion evaluada con m = "+m+ " es " +ec2+" es igual a "+b+"?"
}

function BMI(){
    var libra = parseInt(document.getElementById("libra").value);
    
    var pie = parseInt(document.getElementById("pie").value);
    var pie1 = pie*12;
    var pulgada = parseInt(document.getElementById("pulgada").value);
    var sum = pie1+pulgada;
    var form = 703*(libra/Math.pow(sum,2));
    var F = form.toFixed(1);
    
    if (form < 18.5){
        document.getElementById('masa').innerHTML="su valor de IMC es: " +F+ " , lo que lo clasifica como bajo peso, donde " +F+ " es el valor de IMC redondeado a la decima mas cercana y bajo peso es la clasificacion correspondiente."

    }
    else if(form >=18.5 && form <= 24.9){

        document.getElementById('masa').innerHTML="su valor de IMC es: " +F+ ", lo que lo clasifica como peso normal, donde " +F+ " es el valor de IMC redondeado a la decima mas cercana y peso normal es la clasificacion correspondiente."
        
    }
    else if (form >=25 && form <= 29.9){

        document.getElementById('masa').innerHTML="su valor de IMC es: " +F+ ", lo que lo clasifica como exeso de peso, donde " +F+ " es el valor de IMC redondeado a la decima mas cercana y exeso de peso es la clasificacion correspondiente."
        
 

    }
    else if(form < 30){

        document.getElementById('masa').innerHTML="su valor de IMC es: " +F+ " , lo que lo clasifica como obecidad, donde " +F+ " es el valor de IMC redondeado a la decima mas cercana y obesidad es la clasificacion correspondiente."
        
    }

}