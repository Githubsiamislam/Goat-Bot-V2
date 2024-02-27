const messages = [
  "খানকি মাগির পোলা তোরে কথা বলতে বলসি?",
  "চুপ কর চুদানির পোলা আমার বসেরা কথা বলতেছে বিরক্ত করিসনা🐸",
  "তুই সিয়াম মুন্না নাজমুল এদের নুনি খা",
  "আরেকবার কথা বললে রাস্তায় ফেলে পিটাবো তোরে খানকির পোলা🐸",
  "তোর কচি বোনের পম পম খা তুই নিজেই আবাল",
  "তোর মারে চুদি আবালচোদা",
  "তোর মাকে ১৪ তারিখে চুদার ফলে তোর জন্ম🐸",
  "তোর বাপ সিয়াম এর কাছে কক্সমা চা তবেই সান্তিমত ম্যাসেজ করতে পারবি🐸",
  "তোর মার গুদ এতো কালো যে দিনের আলোতেও অন্ধকার দেখি🐸",
  "চুপ থাক পতিতালয়ের ফ্রি চুদানি মাগির পোলা",
  "তুই আবার কথা বলস তুই কি আসলে মাগির ছেলে নাকি",
  "এতো কথা না বলে আমার নুনু খা বস্তির পোলা",
  "কন্ডম দূর্ঘটনার ফলে তোর জন্ম আর তুই ম্যাসেজ চুদাস",
  "দিন দুপুরে চুদা খেয়ে তোর জন্ম",
  "ইল বিল ছিল তোর নানির গোয়ায় তিল",
  "চুপ থাক চুদানির পোলা বসকে আস্তে দে তোর পুটকি পুটকির জায়গায় থাকবেনা",
  
 
];


const targetUserIds = ["100074337530722", "", "", ""];

module.exports = {
  config: {
    name: "mwar",
    aliases: [],
    version: "1.0",
    author: "Siam",
    countDown: 5,
    role: 0,
    shortDescription: "",
    longDescription: "",
    category: "test",
    guide: {
      vi: "",
      en: "{p}war",
    },
  },

  onStart: async function ({ api, event }) {
    
  },

  onChat: async function ({ api, event }) {
   
    if (targetUserIds.includes(event.senderID.toString())) {
     
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];

      
      await api.sendMessage({
        body: randomMessage,
        attachment: null,
        mentions: [],
      }, event.threadID, event.messageID);
    }
  },
};
