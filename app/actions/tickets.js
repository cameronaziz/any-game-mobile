import * as types from './types'
import seatGeetConfig from './../lib/seatGeekConfig';

let auth = seatGeetConfig.clientId + ':' + seatGeetConfig.clientSecret;

export function fetchGames() {
  return(dispatch, getState) => {
    fetch('https://api.seatgeek.com/2/events?performers.slug=los-angeles-dodgers', {
      method: 'get',
      headers: {
        'Authorization': 'Basic '+btoa(auth),
      }
    }).then(function(res) {
      res.json().then(function(data) {
        console.log(data);
      });
    });

  }
}
