const url = require('url');
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

let msgs = new Array();

exports.apiChat = function (req, res) {
    if (req.pathname == "/chat/listmsgs") { //msgs...globalni promenna typu pole deklarovana na zacatku tohoto zdroje
        res.writeHead(200, {
            "Content-type": "application/json"
        });
        let obj = {};
        obj.messages = msgs;
        res.end(JSON.stringify(obj));
    } else if (req.pathname == "/chat/addmsg") {
        let data = "";
        req.on('data', function (chunk) {
            try {
                data += chunk;
            } catch (e) {
                console.error(e);
            }
        })
        req.on('end', function () {
            if (data) {
                let body = JSON.parse(data);
                res.writeHead(200, {
                    "Content-type": "application/json"
                });
                let obj = {};
                obj.text = entities.encode(body.msg);
                console.log(obj.text);
                obj.time = new Date();
                msgs.push(obj);
                res.end(JSON.stringify(obj));
            };
        });
    }
};