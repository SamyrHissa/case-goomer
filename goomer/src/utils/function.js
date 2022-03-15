export const dayOfWeek = (number) => {
    switch (number) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4:
            return 'Quarta';
        case 5:
            return 'Quinta';
        case 6:
            return 'Sexta';
        case 7:
            return 'Sábado';
        default:
            return 'error';
    }
}
export const openingDays = (days) => {
    let continuousDays = false;
    
    let lastDay = 1;
    if(days.length === 0){return 'Não há informação'}
    let firstDay = days[0];
    let day0 = days[0];
    let day1 = days[0];
    for(let i = 1; i < days.length ; i++){
        day1 = days[i];
        
        if(((day0 + 1) === day1) || ((day0 === 7) && (day1 === 1))){
            continuousDays = true;
        } else {
            continuousDays = false
        }
        
        day0 = day1;
        lastDay = day1;
    }

    if(continuousDays){
        if(days.length === 2){
            return `${dayOfWeek(firstDay)} e ${dayOfWeek(lastDay)}`
        }
        return `${dayOfWeek(firstDay)} a ${dayOfWeek(lastDay)}`
    } else {
        let result = '';
        for(let item = 0; item < days.length - 1; item++){
            result = result + dayOfWeek(days[item]) + ', ';
        }
        if(days.length === 1){
            return dayOfWeek(days[0]) + '.';
        }
        result = result.substring(0, result.lastIndexOf(','));
        result = result + ' e ' + dayOfWeek(days[days.length - 1]) + '.';
        return result
    }
}
export const openedClosened = (days) => {
    const today = new Date();
    const diaSemana = today.getDay() + 1;
    const horas = today.getHours();
    const minutos = today.getMinutes();
    if(!days){return true};
    let opened = false;
    for(let day of days){
        if(day.days.includes(diaSemana)){
            if((day.from.substring(0,5) <= (`${horas}:${minutos}`)) && 
                ((`${horas}:${minutos}`) <= day.to.substring(0,5))){
                    opened = true;
            }
        }
    }
    return opened;
}

export function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }