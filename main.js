menu_list_array = [ "Veg Margarita Pizza",                  
                    " BBQ con triple queso", 
                    " Pizza de queso",
                    " Pizza new york sauce",
                    " Pizza Grandma slice",
                    " Pizza Napolitana",
                    " Pizza sicilian",
                    " Pizza hawaiiana",
                    " Pizza de pepperoni",
                    " Pizza margherita",
                    " Pizza capricolosa",
                    " Pizza del mar",
                    " Pizza veggie",
                    " Pizza marinara",
                    " Pizza de cebollin con cereza",
                    " Pizza salchichon",
                    " Pizza de la casa",
                    " Pizza ahumada",
                    " Pizza con chilis",
                    " Pizza con todas la especias", ]; 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    
    document.getElementById("mostrar_menú").innerHTML = htmldata;
}

function add_suggestion(){
    
	var item = document.getElementById("agregar_elemento").value;
    
    menu_list_array.push(item);
}

