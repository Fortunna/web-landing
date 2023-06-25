

const formatDate = (dateString: string | Date | null) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const date = new Date();

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    let hour = date.getHours();
    const minute = date.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12; // Convert hour to 12-hour format

    const formattedDate = `${day} ${month} '${year}, ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${ampm}`;

    return formattedDate
}

export {
    formatDate

}