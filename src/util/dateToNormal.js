export default function dateToNormal(data){
    const date = new Date(data);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateToLocal = date.toLocaleDateString("ru-RU", options);

    return(dateToLocal);
}