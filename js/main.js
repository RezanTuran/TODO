
    // Create Elements //
var textContainer = document.createElement("div");
var welcomeText = document.createElement("h1");


    // Cretae Class And ID for elemens //
textContainer.id = "main";
welcomeText.classList = "welcomeText";


welcomeText.innerHTML = "Välkommen";
document.body.appendChild(textContainer);
textContainer.append(welcomeText);