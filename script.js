async function init() {
    //id hardcoded ig
    count = await getAndUpdateCount(1000);
    document.getElementById("count").textContent = JSON.stringify(count);
}

async function getAndUpdateCount(id) {
    const url = "https://vnm9i2c79f.execute-api.eu-west-2.amazonaws.com/items/" + id 
    try {
        const response = await fetch (url, {method: "POST"});

        const data = await response.json()
        return data;
    }
    catch(error) {
        console.error('Fetch error:', error);
    }
}

document.addEventListener("DOMContentLoaded", init)

