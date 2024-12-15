async function fetchPirateTranslation(text) {
    try {
        const proxyUrl = "https://corsproxy.io/?"; // I added this because the api wasn't giving any result when i exempted it - AI helped to do this coz i didn't know how to fix it
        const pirateApiUrl = `https://pirate.monkeyness.com/api/translate?english=${encodeURIComponent(text)}`;
        const response = await fetch(proxyUrl + pirateApiUrl);

        if (!response.ok) {
            throw new Error('Failed to fetch pirate translation');
        }

        const pirateText = await response.text();
        return pirateText;
    } catch (error) {
        console.error('Error:', error);
        return "Arrr! Somethin' went wrong with th' translation!";
    }
}

document.getElementById('translateButton').addEventListener('click', async () => {
    const englishText = document.getElementById('englishInput').value.trim();
    if (!englishText) {
        document.getElementById('pirateOutput').textContent = "Arrr! Please type somethin' to translate!";
        return;
    }
    document.getElementById('pirateOutput').textContent = "Translatin'... Hoist the colors!";
    const pirateText = await fetchPirateTranslation(englishText);
    document.getElementById('pirateOutput').textContent = pirateText;
});