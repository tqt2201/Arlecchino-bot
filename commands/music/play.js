


module.exports.data = {
    name: "ping",
    description:"Phát nhạc",
    type: 1,
    Option: [],
    interation_types: [0, 1],
    contexts: [0, 1, 2],
}

module.exports.excute = async (client, interation) => {
    const ping = client.ws.ping;
    interation.reply(ping);
    return;
}