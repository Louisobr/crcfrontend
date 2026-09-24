async function init() {
    //id hardcoded ig
    count = await getAndUpdateCount(100);
    document.getElementById("count").textContent = JSON.stringify(count);
}

async function getAndUpdateCount(id) {
    const url = `${API_URI}/items/` + id;
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

