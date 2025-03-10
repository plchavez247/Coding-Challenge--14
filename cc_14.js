//Task 2: Adding Support Tickets Dynamically
function newSupportTicket(customerName, issueDescription, priorityLevel){
    const ticketContainer = document.getElementById("ticketContainer");
    const ticket = document.createElement("div");
    ticket.setAttribute("class", "ticket-card")//creating support ticket and setting attributes

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = customerName;

    const issueDescrip = document.createElement("p");
    issueDescrip.textContent = issueDescription;

    const labelPriority = document.createElement("p");
    labelPriority.textContent = `Priority:${priorityLevel}`;
    labelPriority.setAttribute("class", `priority-${priorityLevel.toLowerCase()}`);

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"
    resolveButton.addEventListener("click", (event) => {
        ticketContainer.removeChild(ticket);
        event.stopPropagation();
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", (event) => {
        event.stopPropagation();
        ticketEditing(ticket);
    })
    ticket.appendChild(nameHeading)
    ticket.appendChild(issueDescrip);
    ticket.appendChild(labelPriority);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket);

};

newSupportTicket("Henry Farmer", "not recieving email", "Medium");
newSupportTicket("Johnny Pham", "Website not working", "High");

//Task 3: Converting NodeLists to Arrays for Bulk Updates

function highlightUrgentTickets(){
    const highPriorityTickets = document.querySelectorAll(".priority-high");
    const ticketArray = Array.from(highPriorityTickets);
    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = "lightcoral";
        ticket.style.border = "2px solid darkred";
    });
   
};

highlightUrgentTickets();

//Task 4: Implementing Ticket Resolution with Event Bubbling
const ticketContainer = document.getElementById("ticketContainer");
ticketContainer.addEventListener("click", (event)=> {
    const ticket = event.target.closest(`.ticket-card`)
    if (ticket) {
        const customerName =ticket.querySelector(`h2`).textContent; //used to get the actual Customer Name
    
    console.log(`Customer Support Ticket Clicked: ${customerName}`);
    }
});

//Task 5: Inline Editing of Support Tickets
function ticketEditing(ticket){
    let nameHeading = ticket.querySelector("h2");
    let issueDescrip = Array.from(ticket.querySelectorAll("p")).find(p =>!p.textContent.includes("Priority"));
    let priorityLevel = Array.from (ticket.querySelectorAll("p")).find(p=> p.textContent.includes("Priority:"))
    let editButton = ticket.querySelector(".edit-button");

    let nameInput = document.createElement("input");
    nameInput.value = nameHeading.textContent; 

    let issueInput = document.createElement("input");
    issueInput.value = issueDescrip.textContent;  

    let priorityInput = document.createElement("input");
    priorityInput.value = priorityLevel.textContent.replace("Priority: ", "");  
    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";   
    saveButton.className = "save-button";  

    
    saveButton.addEventListener("click", function() {
        nameHeading.textContent = nameInput.value; 
        issueDescrip.textContent = issueInput.value;
        priorityLevel.textContent = `Priority: ${priorityInput.value}`; 
       
      let newPriority = priorityInput.value.toLowerCase() ; 
      if (newPriority === "high") {
        ticket.style.backgroundColor = "#ffcccb"; 
    } else {
        ticket.style.backgroundColor = "#add8e6"; 
    }

        
        ticket.replaceChild(nameHeading, nameInput);   
        ticket.replaceChild(issueDescrip, issueInput);
        ticket.replaceChild(priorityLevel, priorityInput);
        ticket.replaceChild(editButton, saveButton); 
    });

    
    ticket.replaceChild(nameInput, nameHeading);
    ticket.replaceChild(issueInput, issueDescrip);
    ticket.replaceChild(priorityInput, priorityLevel);
    ticket.replaceChild(saveButton, editButton);
}
