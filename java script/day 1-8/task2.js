
async function LoadUsers() {


    const response = await fetch('https://api.npoint.io/edad41bdeb52dbf096dc');
    const data = await response.json();


    const output = document.getElementById('output');


    for (const user of data) {

        const Card = document.createElement('div');
        Card.style.border="2px solid";
        Card.style.padding="10px";

        Card.innerHTML = `
          <h3>${user.name}</h3>
            <p><strong>Age: </strong> ${user.Age}</p>
            <p><strong>Email: </strong> ${user.Email}</p>
            <p><strong>Profession: </strong> ${user.Profession}</p>
        `;

        output.appendChild(Card);
    }


}