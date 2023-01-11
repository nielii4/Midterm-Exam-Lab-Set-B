const add = require('./add')
const read = require('./read')

const cmd = process.argv

var note = {}

if(cmd[2]){
    note = {
        Employee: cmd[2],
        Role: cmd[3],
        Department: cmd[4]
    }

    var oldnote = read()
    add(note, oldnote)
}

if (cmd[2] == 'read'){
    ProgressEvent(read())
}
