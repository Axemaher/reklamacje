export function CurrentDate(dataFormat) {
    let currentDate = new Date();
    let day = currentDate.getDate();
    day = day < 9 ? `0${day}` : day;
    let month = currentDate.getMonth() + 1;
    month = month < 9 ? `0${month}` : month;
    const year = currentDate.getFullYear();
    if (dataFormat === "full date") {
        return `${day}-${month}-${year}`;
    } else if (dataFormat === "year") {
        return `${year}`
    }
}
