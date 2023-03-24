export const pad = (number) => {
    let num = parseInt(number);
    if (isNaN(num)) return "00";
    if (num < 10) num = "0" + num;
    else num.toString();
    return num;
};
export const shortString = (text, length) => {
    let str = text.toString().trim();
    let len = parseInt(length);
    if (str.length > len) {
        str = str.substr(0, len - 4).trim() + " ...";
    }
    return str;
};
export const addCommaToPrice = (number) => {
    let price = number;
    price = price.toString();
    const numFor = Intl.NumberFormat("en-US");
    price = numFor.format(price);
    return price;
};
export const timeConvertor = (str) => {
    let time24 = str;
    time24 = time24.split(":");
    time24[0] = parseInt(time24[0]);
    time24[1] = parseInt(time24[1]);
    let meridian = "AM";
    if (time24[0] >= 12) meridian = "PM";
    if (time24[0] > 12) time24[0] = time24[0] - 12;
    if (time24[0] === 0) time24[0] = 12;
    return pad(time24[0]) + ":" + pad(time24[1]) + " " + meridian;
};
export const dateToString = (date) => {
    let dt = new Date(date);
    let day =
        pad(dt.getDate()) +
        "-" +
        pad(dt.getMonth() + 1) +
        "-" +
        dt.getFullYear();
    const time = timeConvertor(dt.getHours() + ":" + dt.getMinutes());
    return { date: day, time: time };
};
export const capitalize = (string) => {
    const str = string + "";
    const str2 = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return str2;
};
