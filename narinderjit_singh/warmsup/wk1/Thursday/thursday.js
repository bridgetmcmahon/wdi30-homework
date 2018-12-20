/*Serge answers 'Sure.' if you ask him a question.

He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

He says 'Fine. Be that way!' if you address him without actually saying anything.

He answers 'Whatever.' to anything else.

Create a function that takes an input and returns Serge's response.*/

const sergeAns = function(str){
    if(str.length===0 || str===null || str===undefined){
        console.log("Fine");
    }
     else if(str.toUpperCase()===str)
        {         
        console.log("Woah, Chill Out !");
        }
        else
        {   
            if(str.endsWith("?"))
            console.log("Sure");
            else {
                console.log("Whatever");
            }
        }
}

sergeAns("A")