

function displayUser() {
    

    fetch("data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error(`error ${res.status}`); 
            }
            return res.json();
        })

        .then(data => {
            for (let i = 0; i < data.length; i++) {
                const user = data[i]; 
                let card = document.createElement('div');
                card.style.border="2px solid";
                card.style.padding="10px";
                
                card.innerHTML = `
                <h2>${user.name}</h2>
                <p><b>Age: </b> ${user.Age}</p>
                <p><b>Email: </b> ${user.Email}</p>
                <p><b>Profession: </b> ${user.Profession}</p>
                `
                output.appendChild(card);
            }
        })
            
           

        .catch(error => {
            console.error('Error:', error);
            container.textContent = 'Failed to load data.';
        });
}

