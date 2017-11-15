const port = 8000,
	  host = "127.0.0.1"

let multichain = require("multichain-node")({
    host: host,
	port: port,
	user: "multichainrpc",
    pass: "79pgKQusiH3VDVpyzsM6e3kRz6gWNctAwgJvymG3iiuz"
})

let handleDefaultResponse = function(err, res) {
	if (err) 
		throw err

	console.log(res)
}

multichain.getInfo((err, info) => {
    if(err){
        throw err;
    }

	console.log("Connect to blockchain on " + host + ":" + port);
})

multichain.getBlockchainParams(handleDefaultResponse)

//multichain.getNewAddress(handleDefaultResponse)

multichain.getAddresses(handleDefaultResponse)
