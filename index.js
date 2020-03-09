require('dotenv').config();
const axios = require('axios');

axios
  .get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json', {
    params: {
      input: 'Sacramento',
      inputtype: 'textquery',
      fields:
        'formatted_address,geometry,icon,name,permanently_closed,photos,place_id,plus_code,types',
      key: process.env.KEY,
      type: 'restaurant'
    }
  })
  .then(response => {
    console.log(response.data);
  });
