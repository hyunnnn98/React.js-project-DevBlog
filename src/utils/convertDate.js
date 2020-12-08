function convertDate(date) {
    let newDate = new Date(date);

    return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
}

export default convertDate