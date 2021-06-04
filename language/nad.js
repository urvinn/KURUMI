exports.wait = () => {
	return`*Please Wait....*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*Lu Blom Daftar Broh*\n*Daftar Dulu Dengan Cara*\n\nketik : @gen`
}

exports.baned = () => {
	return`*「❗」You have been banned !*`
}

exports.premium = (prefix) => {
	return`Fitur ini khusus user premium!
Ketik #upgrade untuk, mengupgrade Status User`
}

exports.rediregis = () => {
	return`*Udah Daftar,Ngapain Daftar Lagi Bjir*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」FITUR INI KHUSUS GRUB*`
}

exports.ownerb = () => {
	return`*「❗」FITUR INI KHUSUS OWNER*`
}

exports.ownerg = () => {
	return`*「❗」FITUR INI KHUSUS  OWNER*`
}

exports.admin = () => {
	return`*「❗」FITUR INI KHUSUS ADMIN GROUP*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS MENJADI ADMIN!*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🗿」Teks nya mana syg?*`
}

exports.clears = () => {
	return`*Sukses Pak*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
❏「 *LEVEL UP !* 」
│
├ ❏ *Nama* : ${pushname}
├ ❏ *Nomor* : ${sender.split("@")[0]}
├ ❏ *Xp* : ${getLevelingXp(sender)}
├ ❏ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}
╰──────────
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 10K : 1 Bulan\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}
Thanks For Using This BOT`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`

❏「 *BANK* 」
│
│➸ NAMA : ${pushname}
│➸ NOMOR : ${sender.split("@")[0]}
│➸ UANG : ${uangkau}
╰───────────────────
`
}

exports.donasi = () => {
return`Chat #owner`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`Ads Not Activated`
}