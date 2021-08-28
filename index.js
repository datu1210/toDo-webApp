// *** Create a "close" button and append it to each list item ***
// step 1: grabbing all the <li> elements (this creates a node list)
const myNodelist = document.getElementsByTagName("LI");

// step 2: iterating over the node list to access each <li>, one by one
for (let i = 0; i < myNodelist.length; i++) {

    // step 3: creating a <span>
    const span = document.createElement("SPAN");

    // step 4: creating a text node with an "x" character
    const txt = document.createTextNode("\u00D7");

    // step 5: assigning the class "close" to the <span> we created in step 3
    span.className = "close";

    // step 6: injecting the text into the <span> we created in step 3
    span.appendChild(txt);

    // step 6: injecting the <span> into the current <li>
    myNodelist[i].appendChild(span);
}

// *** Click on a close button to hide the current list item ***
// step 1: grabbing all <span> with the class "close" (this creates a node list)
const close = document.getElementsByClassName("close");

// step 2: iterating over the node list to access each <span>, one by one
for (let i = 0; i < close.length; i++) {

    // step 3: on a "click" event, triggering an action (a function)
    close[i].onclick = () => {

        // step 4: grabbing the parent element of current the <span> (an <li>)
        const parentElement = close[i].parentElement;

        // step 5: setting the display style as "none" (CSS)
        parentElement.style.display = "none";
    }
}

// *** Adding a "checked" symbol when clicking on a list item ***
// step 1: Selecting the <ul> (the list container)
const list = document.querySelector('ul');

// step 2: Adding a click action to each <li> (child tags of the container)
list.addEventListener('click', e => e.target.tagName === "LI" && e.target.classList.toggle('checked'), false);

// *** Creating a new list item when clicking on the "Add" button ***
const newElement = () => {

    // step 2: creating a new <li> element
    const li = document.createElement("li");
    
    // step 3: grabbing whatever value is inside the input field
    const inputValue = document.getElementById("myInput").value;

    // step 4: creating a text node with the value we just grabbed
    const t = document.createTextNode(inputValue);

    // step 5: injecting that value into the <li> that we created in step 1
    li.appendChild(t);

    // step 6: is the user clicking the "add" button without filling the input field?
    if (inputValue === '') {

    // step 7.1: if yes, then triggering an alert
        alert("Parece que olvidaste escribir tu Tarea!");

    // step 7.2: if not, grabbing the list (<ul>) and injecting the <li> from step 1 (that element also contains the input text thanks to step 4)
    } else {
        document.getElementById("myList").appendChild(li);
    }

    // step 8: cleaning up the input field
    document.getElementById("myInput").value = "";
    
    // step 9: creating a <span>
    const span = document.createElement("SPAN");

    // step 10: creating a text node with an "x" character
    const txt = document.createTextNode("\u00D7");

    // step 11: assigning the class "close" to the <span> we created in step 3
    span.className = "close";

    // step 12: injecting the text into the <span> we created in step 7
    span.appendChild(txt);

    // step 13: injecting the <span> into the current <li>
    li.appendChild(span);

    // step 14: iterating over all the <span> with the class "close" ("close" is a node list that we created in line 26)
    for (let i = 0; i < close.length; i++) {

        // step 15.1: triggering an action (a function) on a "click" event on each <span>
        close[i].onclick = () => {

            // step 15.2: grabbing the parent element of current the <span> (an <li>)
            const parentElement = close[i].parentElement;

            // step 15.3: setting the display style of the parent element as "none" (CSS)
            parentElement.style.display = "none";
        }
    }
}