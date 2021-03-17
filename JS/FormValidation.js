var inputText = document.getElementsByClassName('input');


var buttonSend = document.getElementById('buttonSend');

buttonSend.addEventListener('click',function(){
    for( var i = 0; i<inputText.length; i++)
    {
        let valor = inputText[i].value;
        if(valor === "")
        {
            swal({
                title: "Complete Form",
                text: "You have not complete all inputs",
                icon: "warning",                
              });                                        
        }
        else{
            swal({
                title: "Good job!",
                text: "Data sent",
                icon: "success",                
              });                            
        }                     
    }
})

