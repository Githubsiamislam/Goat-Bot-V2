const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const KievRPSSecAuth = "FAByBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACHO5L39X6VulMARUuwJtAaNzzgDzU8TSm4+MwkTaLpF9u/qHjt75Wabb4OsN8uvaGkKSKqTHk/+Aa9AKqqpFyty2IvDlqBW9kajF/Js+jx411pHEMQR6khg2Z3q2e+GFQAfykFRrVtdpZR0AaPT/nZ4bjdyYDmoCZGB9IKWbPAW47psG7X0IQl6jCNxIUDFoxXubReLanfHW19iMdh8ZsR5k9+vmEXisHRmQLJwyeQqfUsujF/pfNxlHC+qKr0zyBotQ3ilc6qlsBfzfoeV4812tY9RdebTRn3EWnVUGfzB1lda7TfqSzn8NTtijAWfL9aSuh09zXGNv7PrjfppBTg797Q1cNzMfmBtNuBlGe2oQ3kZwBKyI41m1xb9hRNql8P6qG1PKS8tjy35VzX/y6dz7MBZr1tdAl7d6UM0ph+0mdoBZLLGwFGwLWj925EDNJKB7ogxQkq66edvcZ7rQKR8FykcTyWroS3W9QEpkYEMfyj5hSV4d1cIOwHiscy2pBeHE20T9OZa+WSBGPwYrD4o9504MRUdUd8YFMbhsrZ3mzdRQdoDsL2BVPsreKGrqnWulDALTK+iAEoWancj+ar+8RSUSQjR8QRW+8ao7pXgMzWoK7u2TkhGpfAGpf5x4VqFWKYswrYBV9CYC7u710PafAtPUcne1OFgS1Hyg5Dw8oCPjLt1eqyu4XARlOSN3yvHMaJebwckaQYBBrKW90hb+BBSIRrhkGbUZb1XGgNV1PrTt1WMLB/IA4ZugvLunyKFY2GDcCgZzDiJrJIdu7NRe+9g7TMavpBu4y6OzJ8/uhP/gv1X+xxkZw+GNu9Rslg4DWDCmZ7BjavQKLWBUTZIcPS+3Hqdoo2mfGpMvFA35rmq68vJQrJJGm508f+8ngAGVB55RdTfaL5QtA9Q8N4wQ6ezMft42LOHChEm9xB44fypUoYZyrrwJ48PJS8Bf928YM8x26qpKzio9w4icxyqCh2Jl38Qje5yoEZHjXinGeiDbiCkn1hWyNlGMGLuzXPBqBt37knNx3XaEC0aw216m4RyQ28iHRYqs+vnVTjj5gda3F39ab3ME8OsCU3lh0nYT52XmqVawnOyneyQMzV9S8nduT6Dn4wIomLm15MCPox1ZBGMq3OdkCyMF/+2iKjn/9v7X+LpY9YUsKMJPAjA8f4yQTV7oWV4REFMF2iX1nuJ/3SJbdobTinXmZxyVTyaADVCOWVSB6a+ro4Q7Df+FP+8FfMNQvTlbXwrqmmx19FIB66PONs0L0K9bvdydBqWQE2k4ygStjWXcthkyDf9X2g+/sPAvt0GOwDLNPbPKISQRU9iRTVYBcpSexi5a1rIJR1Kg3s3wRzOdISlKc66Jk3ISnUYJFGaUt/8LAiHBr9hrqCuREWZOswElz/HL44CO+95OuoqW5qEQXA7d0IPVZIolDrP3/ou/FAA5LpL8MTVeoMYpqv199hSm23m/HQ==";
const _U = "1iLPbSUgvIBXoMVnB_VnKxH7BXFjlYZPTgAb6HBwkOmSpeMpUI8siUJQmGPdsf5SoUWhGttlFaxQUvrfkmM7-U_zzgwt5ZoN0Hvo7u7QDl0_adlSv_736KY1pYp7TfYFxbRgPAUvy81w576-CsnH4topUT9ddg11wT3nRMT1XnPCtOjO9X7ca52YNjXnt15WMKMC5RR-vHlbhW8VocoCaRA";
module.exports = {
  config: {
    name: "dalle",
    aliases: ["dalle3"],
    version: "1.0.2",
    author: "SiamXaminul ",
    role: 2,
    countDown: 5,
    shortDescription: {
      en: "dalle"
    },
    longDescription: {
      en: ""
    },
    category: "dalle",
    guide: {
      en: "{prefix}dalle <search query> -<number of images>"
    }
  },

  onStart: async function ({ api, event, args }) {

const uid = event.senderID
    const permission = [`${uid}`];
    if (!permission.includes(event.senderID)) {
      api.sendMessage(
        "You don't have enough permission to use this command. Only admin can do it.",
        event.threadID,
        event.messageID
      );
      return;
    }

    const keySearch = args.join(" ");
    const indexOfHyphen = keySearch.indexOf('-');
    const keySearchs = indexOfHyphen !== -1 ? keySearch.substr(0, indexOfHyphen).trim() : keySearch.trim();
    const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 4;

    try {
      const res = await axios.get(`https://api-dalle-gen.onrender.com/dalle3?auth_cookie_U=${_U}&auth_cookie_KievRPSSecAuth=${KievRPSSecAuth}&prompt=${encodeURIComponent(keySearchs)}`);
      const data = res.data.results.images;

      if (!data || data.length === 0) {
        api.sendMessage("No images found for the provided query.", event.threadID, event.messageID);
        return;
      }

      const imgData = [];
      for (let i = 0; i < Math.min(numberSearch, data.length); i++) {
        const imgResponse = await axios.get(data[i].url, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'cache', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        imgData.push(fs.createReadStream(imgPath));
      }

      await api.sendMessage({
        attachment: imgData,
        body: `Here's your generated image🐸`
      }, event.threadID, event.messageID);

    } catch (error) {
      console.error(error);
      api.sendMessage("cookie of the command. Is expired", event.threadID, event.messageID);
    } finally {
      await fs.remove(path.join(__dirname, 'cache'));
    }
  }
};
