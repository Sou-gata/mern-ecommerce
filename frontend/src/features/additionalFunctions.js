const addCommaToPrice = (number) => {
    let price = number;
    price = price.toString();
    const numFor = Intl.NumberFormat("en-US");
    price = numFor.format(price);
    return price;
};
const removeSpace = (string) => {
    let text = string;
    text = text.split(" ");
    let newText = "";
    for (let i = 0; i < text.length; i++) {
        text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
        newText += text[i];
    }
    return newText;
};

export { addCommaToPrice, removeSpace };
