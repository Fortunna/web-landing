

const formatDate = (dateString: string | Date | null) => {
    const date = new Date(dateString ?? Date.now()); // Assuming the current date is being used

    const options = {
        day: 'numeric',
        month: 'short',
        year: '2-digit',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    const formattedDate = date.toLocaleString('en-US', options);

    return formattedDate
}

export {
    formatDate

}