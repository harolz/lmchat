import request from 'superagent';
import moment from 'moment';

const CALENDAR_ID = 'rclh2scs2piu7acngc5dikg3ns@group.calendar.google.com';
const API_KEY = 'AIzaSyBa-rNBVN64mxd8CSNGIuHE1lRy4PV50zg';
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = [];
        JSON.parse(resp.text).items.map((event) => {
          let sTime = event.start.date || event.start.dateTime;
          let eTime = event.end.date || event.end.dateTime;
          let csTime = moment(sTime).toDate();
          let ceTime = moment(eTime).toDate();
          return events.push({
            start: csTime,
            end: ceTime,
            title: event.summary,
            description: event.description,
            location: event.location
            // calendar: cal.url,
            // category: cal.category
          });
        });
        callback(events);
      }
    });
}

