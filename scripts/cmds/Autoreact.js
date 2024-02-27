module.exports = {
    config: {
        name: "autoreact",
		      version: "1.0",
	       	author: "Siam",
		      countDown: 5,
	       	role: 0,
		      shortDescription: "msg react set",
	       	longDescription: "msg react setup",
		       category: "saua ",
    },
	onStart: async function (){},
	onChat: async function ({ event ,api}) {
		if (event.body.toLowerCase().indexOf("saua") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good night") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("good morning") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("murgi") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("khaisos") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("cudmu") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("🐸") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("😂") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("bc") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
		
		if (event.body.toLowerCase().indexOf("mc") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
    
   	if (event.body.toLowerCase().indexOf("bal") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)

    if (event.body.toLowerCase().indexOf("tor nanir saua") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("good") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)

		if (event.body.toLowerCase().indexOf("ki koros") !== -1) return api.setMessageReaction("🐸", event.messageID,event.threadID)
}
};
