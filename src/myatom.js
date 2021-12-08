const {registerNode} = require("./mycoil_nodes")

function myatom(mycoilValue) {
    return registerNode(mycoilValue)
}

module.exports = {myatom}