function addDate (){
    const nowDate = new Date();
          const date = {
              year: nowDate.getFullYear(),
              month: nowDate.getMonth() + 1,
              date: nowDate.getDate(),
          }
          const newmonth = date.month>10?date.month:'0'+date.month
          const day = date.date>10?date.date:'0'+date.date
          let Time = date.year + '-' + newmonth + '-' + day
          return Time
}

export {addDate}