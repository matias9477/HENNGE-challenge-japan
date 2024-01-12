async function sendPostRequest() {
    const url = 'https://api.challenge.hennge.com/challenges/003';
    const email = "matias.turra@gmail.com";
    const password = "HENNGECHALLENGE";
    const credentials = btoa(`${email}:${password}`);

    const headers = new Headers({
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json'
    });

    const body = JSON.stringify({
        "contact_email": email,
        "github_url": "https://gist.github.com/matias9477/00100298c21e45d4988e1017d959b6db",
        "solution_framework": "react"
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

sendPostRequest();
