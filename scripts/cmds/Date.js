const axios = require('axios');

module.exports = {
  config: {
    name: "date",
    aliases: [],
    author: "Siam",  
    version: "2.0",
    cooldowns: 5,
    role: 0,
    shortDescription: {
      en: ""
    },
    longDescription: {
      en: "know time of any city"
    },
    category: "date info",
    guide: {
      en: "{p}{n} name of city"
    }
  },
  onStart: async function ({ api, event, args }) {
    
    const cityName = args.join(' ');

    if (!cityName) {
      api.sendMessage("Please provide the name of a city.", event.threadID, event.messageID);
      return;
    }

   
    try {
      const apiKey = '0Hr3RnpBTgQvQ9np4ibDrQ==CkYJq9yAT5yk6vIn'; // add your own apikey
      const apiUrl = `https://api.api-ninjas.com/v1/worldtime?city=${encodeURIComponent(cityName)}`;
      const response = await axios.get(apiUrl, { headers: { 'X-Api-Key': apiKey } });

    
      const { timezone, datetime, day_of_week, year, month } = response.data;

   
      const currentTime = datetime.split(' ')[1]; 
      const message = `🐸🐸🐸🐸🐸🐸🐸𝓣𝓘𝓜𝓔🐸🐸🐸🐸🐸🐸
      ━━━━━━━━━━━━━━━━━━━━━━━━━
𝑻𝑰𝑴𝑬: ${currentTime}\

𝒀𝑬𝑨𝑹:${year}\

𝑴𝑶𝑵𝑻𝑯:${month}\

𝑫𝑨𝒀: ${day_of_week}
🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸🐸

𝑻𝒉𝑎𝒏𝒌𝒔 𝑭𝒐𝒓 𝑼𝒔𝒊𝒏𝑔 🐸 𝒀𝒐𝒖𝒓 𝑮𝒓𝑎𝒏𝑑𝑓𝑎𝒕𝒉𝑒𝒓: 𝑳𝑒𝑔𝑒𝒏𝑑𝒔 𝑩𝒐𝒙`;
      api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
 
      api.sendMessage("Error fetching time information\d your own api key in code", event.threadID, event.messageID);
    }
  },
};

/*
in future if code stop working 
add your own apikey in code there is guide
you can get apikey from ninja pai web
*/
