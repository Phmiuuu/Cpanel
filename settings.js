const fs = require('fs')
const chalk = require('chalk')

global.domain = '-' // Isi Link Login Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu

//------------------------------------------------------------------------------------------------\\

global.version = "V2"
global.ownerName = 'PhmiFz' // Isi Nama Owner
global.namaOwner = 'PhmiFz' // Isi Nama Owner Lu

global.botName = 'X-FazPanelStore' // Isi Nama Bot
global.namaBot = 'X-FazPanelStore' // Isi Nama Bot

global.owner = ['6289687537657', '62895623530099', '62895324601397', '6289687537657', '6289687537657', '6289687537657'] // Isi Nomor Lu
global.ownerNumber = ["6289687537657@s.whatsapp.net"] // Isi Nomor lu
global.nomorOwner = "6289687537657" //Isi Nomor Lu

//------------------------------------------------------------------------------------------------\\

global.sessionName = 'session' // nama session
global.packname = '© By PhmiFz'
global.author = 'Cie Mau Maling\6289687537657'
global.email = 'phmifz@gmail.com'
global.youtube = '_'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']

global.lol = '09b723b1fee8877ff7a8c347'
global.rose = 'M2Y54JNG'
global.xyro = 'QEZ9ZsQdNz'

global.keyai = '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' // get from https://platform.openai.com/account/api-keys

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
}

//------------------------------------------------------------------------------------------------\\

global.dana = fs.readFileSync('./image/dana.jpg')
global.gopay = fs.readFileSync('./image/gopay.jpg')
global.qris = fs.readFileSync('./image/qris.jpg')
global.logo = fs.readFileSync('./image/logo.jpg')

//------------------------------------------------------------------------------------------------\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})