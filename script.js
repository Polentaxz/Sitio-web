document.addEventListener("DOMContentLoaded", function () {
    const linksContainer = document.getElementById("links");

    // Agrega tus enlaces aquí
    const links = [
        { text: "Steam", url: "https://steamcommunity.com/id/Polentaxz/" },
        { text: "Instagram", url: "https://www.instagram.com/nahuel_martin_lol" },
        { text: "Github", url: "https://github.com/Polentaxz" },
        { text: "Twitter", url: "https://twitter.com/__Polenta_" },
        // Agrega más enlaces según sea necesario
    ];

    // Genera la lista de enlaces
    links.forEach((link) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");

        anchor.textContent = link.text;
        anchor.href = link.url;
        anchor.target = "_blank";

        listItem.appendChild(anchor);
        linksContainer.appendChild(listItem);
    });
});
