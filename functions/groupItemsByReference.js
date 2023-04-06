function groupItemsByReference(items) {
    const groupedItems = {};

    for (const item of items) {
        if (!groupedItems[item.reference]) {
            groupedItems[item.reference] = [];
        }
        groupedItems[item.reference].push(item);
    }

    return groupedItems;
}

module.exports = groupItemsByReference;