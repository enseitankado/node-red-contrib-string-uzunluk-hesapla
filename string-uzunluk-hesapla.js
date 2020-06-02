module.exports = function(RED) {
    function StringUzunlukNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.on('input', function(msg) {

            msg.payload = Number(msg.payload.length);
            if(msg.payload == 0)
		this.status( {fill:"red", shape:"dot", text:"String icerigi bos!"} );
           else
               this.status( {} );

            node.send(msg);
        });
    }
    RED.nodes.registerType("string-uzunluk-hesapla", StringUzunlukNode);
}
