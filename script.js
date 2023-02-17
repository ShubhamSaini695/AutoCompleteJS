
var names = ["Emily","Hannah","Madison","Ashley","Sarah",
"Alexis","Samantha","Jessica","Elizabeth","Taylor","Lauren",
"Alyssa","Kayla","Abigail","Brianna","Olivia","Emma","Megan",
"Grace","Victoria","Rachel","Anna","Sydney","Destiny","Morgan",
"Jennifer","Jasmine","Haley","Julia","Kaitlyn","Nicole","Amanda",
"Katherine","Natalie","Hailey","Alexandra","Savannah",
"Chloe","Rebecca","Stephanie","Maria","Sophia","Mackenzie","Allison",
"Isabella","Amber","Mary","Danielle","Gabrielle","Jordan","Brooke",
"Michelle","Sierra","Katelyn","Andrea","Madeline","Sara","Kimberly",
"Courtney","Erin","Brittany","Vanessa","Jenna","Jacqueline","Caroline",
"Faith","Makayla","Bailey","Paige","Shelby","Melissa","Kaylee","Christina","Trinity","Mariah",
"Caitlin","Autumn","Marissa","Breanna","Angela","Catherine","Zoe","Briana","Jada","Laura","Claire",
"Alexa","Kelsey","Kathryn","Leslie","Alexandria","Sabrina","Mia","Isabel","Molly","Leah","Katie"];



let sortedNames = names.sort();

let input = document.getElementById("autocomplete-input");

let suggestionsBox= document.getElementById("autocomplete-suggestion");
let count= 0;


input.addEventListener("keyup", (e) => { 
    complete();
});

function complete(){
    removeElements();
    count=0;
    for (let i of sortedNames) 
    {
        
        
        if (i.toLowerCase().startsWith(input.value.toLowerCase()) &&input.value != "") 
        {
            count++;
            let listItem = document.createElement("li");

            listItem.classList.add("list-items");
            listItem.setAttribute('id',count);
            listItem.style.cursor = "pointer";
            
            listItem.setAttribute("onclick", "displayNames('" + i + "')");        
            
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);

            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);

            
            
        }
        
        
    }
    
}

function displayNames(value) {
    input.value = value;
    // document.getElementById("language").style.visibility = "visible";
    removeElements();
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
    item.remove();
    });
}



let lastSuggestionIndex = count;
// let suggestionElements = Array.from[suggestionsBox.children];

                
var sIndex = 0;

    input.onkeydown = function (e) 
    {
        let high=document.getElementById(sIndex);
        
        
        // down key is pressed
        if (e.keyCode === 40) {
            if(sIndex <= count){
                sIndex++;
                high.classList.add("hl");
            }
        
            else {
                sIndex=0;
            }
        }
        else if (e.keyCode === 38) {
            
            if (sIndex  > 0) {
                
                sIndex --;
                high.classList.add("hl");
                
            }
            else {
                sIndex=count;
            }
        }
    }        

