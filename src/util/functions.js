// Utility function that returns how long ago the post was made.
export const shortenText = (text) => {
  if (text.length > 100) {
    text = text.substring(0, 100) + ' ...';
  }

  return text;
}

// Utility function that shortens the amount of text that is initially displayed if longer than 50 characters.
export const readableDate = (date) => {
  const publishDate = new Date(date);

  const year = publishDate.getFullYear();
  const month = publishDate.getMonth() + 1;
  const day = publishDate.getDate();
  const hour = publishDate.getHours();
  const minute = publishDate.getMinutes();

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const currentDay = new Date().getDate();
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const yearsAgo = currentYear - year;
  const monthsAgo = currentMonth - month;
  const daysAgo = currentDay - day;
  const hoursAgo = currentHour - hour;
  const minutesAgo = currentMinute - minute;

  if(yearsAgo >= 1){
    return `${yearsAgo === 1 ? `a year ago` : `${yearsAgo} years ago`}`;
  }

  if(monthsAgo >= 1){
    return `${monthsAgo === 1 ? `a month ago` : `${monthsAgo} months ago`}`;
  }

  if(daysAgo >= 7){
    return `${daysAgo === 7 ? `a week ago` : `${daysAgo / 7} weeks ago`}`;
  }

  if(daysAgo >= 1){
    return `${daysAgo === 1 ? `a day ago` : `${daysAgo} days ago`}`;
  }
  
  if(hoursAgo >= 1){
    return `${hoursAgo === 1 ? `a hour ago` : `${hoursAgo} hours ago`}`;
  }

  if(minutesAgo >= 1){
    return `${minutesAgo === 1 ? `a minute ago` : `${minutesAgo} minutes ago`}`;
  }

  return `Just Now`
}