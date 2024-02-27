const PastebinAPI = require('pastebin-js');
const fs = require('fs');
const path = require('path');

module.exports = {
  config: {
    name: "pastebin",
    aliases: ["bin"],
    version: "1.0",
    author: "Siam",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Upload files to pastebin and sends link"
    },
    longDescription: {
      en: "This command allows you to upload files to pastebin and sends the link to the file."
    },
    category: "Utility",
    guide: {
      en: "To use this command, type !pastebin <filename>. The file must be located in the 'cmds' folder."
    }
  },
  onStart: async function({ api, event, args }) {

const permission = ["100089118994023","100071880593545"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage(
        "🚫 | YOU CAN'T USE THIS CMD\n\n🙅‍♂ | Only My Boss SiamXaminul Can Use It🐸 ",
        event.threadID,
        event.messageID
      );
    }
    const pastebin = new PastebinAPI({
      api_dev_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9',
      api_user_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9',
    });
    const fileName = args[0];
    const filePathWithoutExtension = path.join(__dirname, '..', 'cmds', fileName);
    const filePathWithExtension = path.join(__dirname, '..', 'cmds', fileName + '.js');
    if (!fs.existsSync(filePathWithoutExtension) && !fs.existsSync(filePathWithExtension)) {
      return api.sendMessage('File not found!', event.threadID);
    }
    const filePath = fs.existsSync(filePathWithoutExtension) ? filePathWithoutExtension : filePathWithExtension;
    fs.readFile(filePath, 'utf8', async (err, data) => {
      if (err) throw err;
      const paste = await pastebin
        .createPaste({
          text: data,
          title: fileName,
          format: null,
          privacy: 1,
        })
        .catch((error) => {
          console.error(error);
        });

      const rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

      api.sendMessage(`Cmd install ${fileName}.js ${rawPaste}`, event.threadID, event.messageID);
    });
  },
};
