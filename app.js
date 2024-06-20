    var a = document.getElementById("one")
    var b = document.getElementById("two")
    var c = document.getElementById("three")  
    var e= document.getElementById("four")  
    
    var d=10
    var random = Math.floor(Math.random()*10)+1
    function check(){
        var enter = a.value
        if(random == enter){
            b.textContent="YOU RIGHT"
            alert("You Won")
            e.textContent =" CONGRATS"
            
        }
        else if(random <= enter)
            {
            d = d-1
            c.textContent = "Your Chance is "+d
            b.textContent="Its Too High"
        }
        else{
            d = d-1
            c.textContent = "Your Chance is "+d
            b.textContent="Its Too Low"

        }
    }

    