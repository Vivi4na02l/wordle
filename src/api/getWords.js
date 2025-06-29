export default async function fetchRandomWord() {
    const wordResponse = await fetch(
        `https://random-words-api.vercel.app/word`
    );
    
    return await wordResponse.json();
}