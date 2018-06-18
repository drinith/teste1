//Nesse caso o projeto o projeto já está dividido nos diretorios clientes e server
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'
import './main.html';



Template.calcula.helpers({
    'resposta': function() {
        return Session.get("resultado");   
    }
});

Template.calcula.events({ 
    'click #cal': function(event, template) { 
        //Função que deve ser colocada caso não queira que  
        event.preventDefault();
        let a = template.find('#a').value;
        let b = template.find('#b').value;
        let c = template.find('#c').value;
    

        //Chamada da função que vai resolver a equação
        resolve(a,b,c);
    } 
});

//Função que resolve a equação de segundo grau
var resolve = function(a,b,c){


    var delta = b*b - 4 * a * c;
    var resultado;
    var x1,x2;
    if(delta>0){

        x1=(-b+Math.sqrt(delta))/-2*a; 
        x2=(-b-Math.sqrt(delta))/-2*a;
        resultado = " Existe duas raizes reais "+x1+" e "+x2;

    }else if(delta==0){
        x1=(-b)/-2*a; 
        
        resultado = " Existe uma raiz real "+x1;
    }else{
        resultado = "Não existe raizes reais";

    }

    $("#resposta").val(resultado);
   
   
   
    // Session.set("resultado", " TESTE Resolver é com vocês :) !!!!!!");
}