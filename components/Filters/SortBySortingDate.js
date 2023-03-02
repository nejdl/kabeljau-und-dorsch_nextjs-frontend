export const sortBySortingDate = (posts) => {
  
  const formatDate = (date) => {
    if (date !== null){
      let datePart = date.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1], day = datePart[2];

      return year+month+day;
    } else {
      return 0;
    }
  }

  posts.sort((a,b) => (formatDate(a.start_date) < formatDate(b.start_date)) ? 1 : ((formatDate(b.start_date) < formatDate(a.start_date)) ? -1 : 0)); 

}