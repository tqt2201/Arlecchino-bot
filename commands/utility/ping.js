


module.exports.data = {
    name: "ping",
    description:"Xem ping của bot",
    type: 1,
    Option: [],
    interation_types: [0],
    contexts: [0],
}

module.exports.excute = async (client, interation) => {
    const ping = client.ws.ping;
    interation.reply(ping);
    return;
}