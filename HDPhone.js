class HDPhone {
    constructor(name) {
        this.battery = 100;
        this.draft = '';
        this.outbox = [];
        this.inbox = [];
        this.status = true;
        this.name = name;
    }

    checkStatus() {
        return this.status
    }

    writingMessage(text) {
        if (this.status) {
            return this.draft = text;
        }
    }

    sendMessage(phone) {
        if (this.status) {
            phone.inbox.push(this.draft);
            this.outbox.push(this.draft);
            this.draft = "";
            this.battery--;
        }
    }

    getOutbox() {
        if (this.status) {
            this.battery--;
            return this.outbox;
        }
    }

    getInbox() {
        this.battery--;
        return this.inbox;
    }
}

let phone1 = new HDPhone("Phone1");
let phone2 = new HDPhone("Phone2");

function sendMessageToPhone2() {
    let mess1 = document.getElementById("mes1").value;
    phone1.writingMessage(mess1);
    phone1.sendMessage(phone2);
    let inboxPhone2 = phone2.inbox.join(",")
    document.getElementById("inboxPhone2").innerText = inboxPhone2;
    document.getElementById("mes1").value = ''
    let battery = phone1.battery
    document.getElementById("battery1").innerHTML = battery + "%";
}

function sendMessageToPhone1() {
    let mess2 = document.getElementById("mes2").value;
    phone2.writingMessage(mess2);
    phone2.sendMessage(phone1);
    let inboxPhone1 = phone1.inbox.join(",");
    document.getElementById("inboxPhone1").innerText = inboxPhone1;
    document.getElementById("mes2").value = '';
    let battery = phone2.battery
    document.getElementById("battery2").innerHTML = battery + "%";
}