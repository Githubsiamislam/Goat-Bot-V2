module.exports = {
	config: {
		name: "murgi",
    aliases: ["Murgi"],
		version: "1.0",
		author: "Siam",
		role: 2,
		category: "funny",
    shortDescription: "murgi",
		longDescription: "",
		guide: {
			vi: "not Available",
			en: "{p} chik"
		} 
	},

  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি যাকে চুদতে  চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("๛➣𓆩𝗦𝗜𝗔𝗠‣𒁍 এর চুদা লো");
setTimeout(() => {a({body: "খাংকির পোলা তর মারে চুদি 🥰" + " " + name, mentions: arraytag})}, 2000);
setTimeout(() => {a({body: "Welcome শুয়োরের বাচ্চা 🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "𝗦𝗜𝗔𝗠 এর জারজ সন্তান" + " " + name, mentions: arraytag})}, 4000);
setTimeout(() => {a({body: "কুত্তার বাচ্ছা তর বৌন ভোদায় মাগুর মাছ চাষ করুম।😍." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "খাংকির পোলা তর কচি বোন রে চুদি 😍.." + " " + name, mentions: arraytag})}, 6000);
setTimeout(() => {a({body: "আমি তোর বাপ ๛➣𓆩𝗦𝗜𝗔𝗠‣𒁍 যেইখানে দেখবি সেইখানে দিবি সালাম🫡👹 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "খাঙ্কিরপোলা পোলা তর বোনের  হোগায় ইনপুট, তর মায়ের ভোদায় আউটপুট।🥱" + " " + name, mentions: arraytag})}, 8000);
setTimeout(() => {a({body: "তর মায়ের ভোদা বোম্বাই মরিচ দিয়া চুদামু।🥱" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Hi ๛➣𓆩𝗦𝗜𝗔𝗠‣𒁍 এর জারজ মাগির পোলা" + " " + name, mentions: arraytag})}, 10000);
