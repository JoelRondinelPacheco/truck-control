export const tomorrowDate = () => {
    let date = new Date();
    let tomorrow = new Date(date);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
    
}