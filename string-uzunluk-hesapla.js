module.exports = function(RED) {
    function StringUzunlukNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {
	    this.status({fill:"red",shape:"ring",text:"disconnected"});
            msg.payload = Number(msg.payload.length);
            node.send(msg);
        });
    }
    RED.nodes.registerType("string-uzunluk-hesapla", StringUzunlukNode);
}
