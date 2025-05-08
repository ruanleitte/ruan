import { formatInTimeZone as dateFormatterInTimeZone } from 'date-fns-tz';
import { format } from 'date-fns';

export const availableTimezones = [
  { value: "America/Los_Angeles", label: "(GMT-08:00) Pacific Time" },
  { value: "America/Denver", label: "(GMT-07:00) Mountain Time" },
  { value: "America/Chicago", label: "(GMT-06:00) Central Time" },
  { value: "America/New_York", label: "(GMT-05:00) Eastern Time" },
  { value: "UTC", label: "(GMT+00:00) UTC" },
  { value: "Europe/London", label: "(GMT+00:00) London" },
  { value: "Europe/Paris", label: "(GMT+01:00) Central European Time" },
  { value: "Europe/Athens", label: "(GMT+02:00) Eastern European Time" },
  { value: "Asia/Kolkata", label: "(GMT+05:30) Indian Standard Time" },
  { value: "Asia/Shanghai", label: "(GMT+08:00) China Standard Time" },
  { value: "Asia/Tokyo", label: "(GMT+09:00) Japan Standard Time" },
  { value: "Australia/Sydney", label: "(GMT+10:00) Australian Eastern Time" },
];

export function formatInTimeZone(date: Date | string, timeZone: string, formatStr: string): string {
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return dateFormatterInTimeZone(date, timeZone, formatStr);
  } catch (error) {
    console.error("Error formatting in timezone:", error);
    return format(new Date(date), formatStr);
  }
}

export function convertTime(date: Date | string, fromTimezone: string, toTimezone: string): Date {
  try {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    
    // Get the time in the original timezone
    const fromDate = new Date(date);
    
    // Format as ISO string without the timezone part
    const isoString = formatInTimeZone(fromDate, fromTimezone, "yyyy-MM-dd'T'HH:mm:ss");
    
    // Parse in the new timezone
    const [datePart, timePart] = isoString.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes, seconds] = timePart.split(':').map(Number);
    
    // Create a new date in the target timezone
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
  } catch (error) {
    console.error("Error converting time:", error);
    return new Date(date);
  }
}

export function formatTimezoneOffset(timezone: string): string {
  try {
    const now = new Date();
    const offset = formatInTimeZone(now, timezone, 'xxx'); // Returns something like "+01:00"
    return `GMT${offset}`;
  } catch (error) {
    console.error("Error formatting timezone offset:", error);
    return timezone;
  }
}

export function getTimezoneDisplay(timezone: string): string {
  const tzItem = availableTimezones.find(tz => tz.value === timezone);
  return tzItem ? tzItem.label : timezone;
}
