module.exports = {
    name: "hentai",
    description: "hentai nsfw anime image",
    nsfw: true,
    category: "nsfw",
    slash: false,
    execute: async (client, message, args) => {
        const m = await message.channel.send("Loading...")
        
        const url = await new Promise(async (res, rej) => {
            client.nekolife.nsfw.hentai()
            .then(data => res(data.url))
            .catch(err => rej())
            
            setTimeout(() => {
                rej()
            }, 10000);
        })
        
        if (!url) return m.edit(":x: Failed to get nsfw image.")
        
        const embed = new client.discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`NSFW Image for ${message.author.tag}`)
        .setImage(url)
        
        m.edit("", embed)
    }
}