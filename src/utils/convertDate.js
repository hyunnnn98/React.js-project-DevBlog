function convertDate(prevDate) {
    let newDate = new Date(prevDate);
    let month = newDate.getMonth() + 1
    let date = newDate.getDate()
    if (month < 10) month = "0" + month
    if (date < 10) date = "0" + date
    return `${newDate.getFullYear()}-${month}-${date}`
}

export default convertDate