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


var resolve = function(a,b,c){

    Session.set("resultado", "Resolver é com vocês :) !!!!!!");
}