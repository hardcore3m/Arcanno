export default function drawTarotCards(numCards, canInvert) {
    const cards = [];

    // Create array of card numbers
    const cardNumbers = Array.from({
        length: 78
    }, (_, i) => i + 1);

    for (let i = 0; i < numCards; i++) {
        // Randomly select card from remaining card numbers
        const randomIndex = Math.floor(Math.random() * cardNumbers.length);
        const cardNumber = cardNumbers.splice(randomIndex, 1)[0];

        // Determine if card should be inverted
        const inverted = canInvert ? Math.random() < 0.5 : false;

        // Add card to list of drawn cards
        cards.push({
            card: cardNumber-1,
            inverted
        });
    }

    return cards;
}