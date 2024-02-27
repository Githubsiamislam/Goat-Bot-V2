const fetch = require("node-fetch");
const { getPrefix, getStreamFromURL } = global.utils;


module.exports = {
  config: {
    name: "deviceinfo",
    version: "1.0",
    author: "Rishad",
    countDown: 15,
    role: 0,
    shortDescription: {
      en: "Get information about a device.",
    },
    longDescription: {
      en: "Retrieve detailed information about the specified device.",
    },
    category: "info",
    guide: {
      en: "{pn}deviceinfo (device name)",
    },
  },
  onStart: async function ({ api, args, event }) {
    const search = args.join(" ");

    if (!search) {
      api.sendMessage("Please provide the name of the device you want to search for.", event.threadID);
      return;
    }

    const searchUrl = `https://for-devs.onrender.com/api/deviceinfo/search?query=${encodeURIComponent(search)}&apikey=fuck`;

    try {
      const searchResponse = await fetch(searchUrl);
      const searchResults = await searchResponse.json();

      if (searchResults.results.length === 0) {
        api.sendMessage(`❌No results found for '${search}'. Please try again with a different device name.`, event.threadID);
        return;
      }

      let replyMessage = "🔍 Search Results:\n\n";
      for (let i = 0; i < searchResults.results.length; i++) {
        const device = searchResults.results[i];
        replyMessage += `${i + 1}. ${device.name}\n`;
      }
      replyMessage += "\nReply with the number of the device you want to get info about.";

      const reply = await api.sendMessage(replyMessage, event.threadID);
      const replyMessageID = reply.messageID;

      global.GoatBot.onReply.set(replyMessageID, {
        commandName: "deviceinfo",
        author: event.senderID,
        messageID: replyMessageID,
        results: searchResults.results,
      });
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching device information.", event.threadID);
    }
  },
  onReply: async function ({ api, event, Reply }) {
    const { author, messageID, results } = Reply;

    if (event.senderID !== author) return;

    const selectedNumber = parseInt(event.body);

    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > results.length) {
      api.sendMessage("Invalid option selected. Please reply with a valid number.", event.threadID);
      return;
    }

    const selectedDevice = results[selectedNumber - 1];
    const url = selectedDevice.url;
    const infoUrl = `https://for-devs.onrender.com/api/deviceinfo/info?url=${encodeURIComponent(url)}&apikey=fuck`;

    try {
      const infoResponse = await fetch(infoUrl);
      const deviceInfo = await infoResponse.json();

      if (deviceInfo.status === 200) {
     let infoMessage = `📱Device: ${deviceInfo.result.title}\n`;
        infoMessage += `📅 Release Date: ${deviceInfo.result.releaseDate}\n`;
        infoMessage += `📏 Dimensions: ${deviceInfo.result.dimensions}\n`;
        infoMessage += `📱 Type: ${deviceInfo.result.type}\n`;
        infoMessage += `💾 Storage: ${deviceInfo.result.storage}\n`;
        infoMessage += `🔍 Display Info: ${deviceInfo.result.displayInfo}\n`;
        infoMessage += `📏 Display Inch: ${deviceInfo.result.displayInch}\n`;
        infoMessage += `📷 Camera Pixel: ${deviceInfo.result.cameraPixel}\n`;
        infoMessage += `🎥 Video Pixel: ${deviceInfo.result.videoPixel}\n`;
        infoMessage += `🔒 RAM Size: ${deviceInfo.result.ramSize}\n`;
        infoMessage += `🧰 Chipset Info: ${deviceInfo.result.chipsetInfo}\n`;
        infoMessage += `🔋 Battery Type: ${deviceInfo.result.batteryType}\n`;
        infoMessage += `🔌 Battery Brand: ${deviceInfo.result.batteryBrand}\n`;
       
       
        const image = await getStreamFromURL(deviceInfo.result.thumbnailUrls[0]);

       
        const msgSend = await api.sendMessage(
          {
            body: infoMessage,
            attachment: image,
          },
          event.threadID
        );
      } else {
        api.sendMessage("Sorry, the device information could not be retrieved.", event.threadID);
      }
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while fetching device information.", event.threadID);
    }
  },
};
