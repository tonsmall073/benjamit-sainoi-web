export const englishDate = (date: string | Date): string => {
    const getDate = new Date(date)
    return `${getDate.getFullYear()}-${(getDate.getMonth()+1).toString().padStart(2,"0")}-${getDate.getDate().toString().padStart(2,"0")}`
}

export const thaiDate = (date: string | Date): string => {
    const getDate = new Date(date)
    return `${getDate.getDate().toString().padStart(2,"0")}/${(getDate.getMonth()+1).toString().padStart(2,"0")}/${getDate.getFullYear()+543}`
}