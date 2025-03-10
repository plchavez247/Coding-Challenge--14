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

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"
    resolveButton.addEventListener("click", (event) => {
        ticketContainer.removeChild(ticket);
        event.stopPropagation();
    });
    ticket.appendChild(nameHeading)
    ticket.appendChild(issueDescrip);
    ticket.appendChild(labelPriority);
    ticket.appendChild(resolveButton);
    ticketContainer.appendChild(ticket);

};

newSupportTicket("Henry Farmer", "not recieving email", "Medium");
newSupportTicket("Johnny Pham", "Website not working", "High");