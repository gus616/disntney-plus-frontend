export const getYearFromDate = (dateString: string): number => {
    const date = new Date(dateString);
    return date.getFullYear();
}
