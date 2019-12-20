import { shortenText, readableDate } from '../util/functions';
import { shortText, longText } from './_data_/testData';

describe('shortenText', () => {
  it('shortenText should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(shortText.length);
  });

  it('shortenText should cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
  });
})

describe('readableDate takes in a date object and puts it into an either "years ago", "months ago", "weeks ago", "days ago", "hours ago", "minutes ago", or "Just now" format based on the amount of elapsed time.', () => {
  let today = new Date();
  it('readableDate - Just Now', () => {
    expect(readableDate(today)).toBe('Just Now');
  })

  it('readableDate - minutes ago', () => {
    const todayMinusTenMinutes = new Date(today.setMinutes(today.getMinutes() - 10));
    expect(readableDate(todayMinusTenMinutes)).toBe('10 minutes ago');
  })

  it('readableDate - hours ago', () => {
    today = new Date();
    const todayMinusTenHours = new Date(today.setHours(today.getHours() - 10));
    expect(readableDate(todayMinusTenHours)).toBe('10 hours ago');
  })
  
  it('readableDate - days ago', () => {
    today = new Date();
    const todayMinusFiveDays = new Date(today.setDate(today.getDate() - 5));
    expect(readableDate(todayMinusFiveDays)).toBe('5 days ago');
  })
  
  it('readableDate - weeks ago', () => {
    today = new Date();
    const todayMinusTwoWeeks = new Date(today.setDate(today.getDate() - 14));
    expect(readableDate(todayMinusTwoWeeks)).toBe('2 weeks ago');
  })
  
  it('readableDate - months ago', () => {
    today = new Date();
    const todayMinusTenMonths = new Date(today.setMonth(today.getMonth() - 10));
    expect(readableDate(todayMinusTenMonths)).toBe('10 months ago');
  })
  
  it('readableDate - years ago', () => {
    today = new Date();
    const todayMinusTwoYears = new Date(today.setFullYear(today.getFullYear() - 2));
    expect(readableDate(todayMinusTwoYears)).toBe('2 years ago');
  })
})