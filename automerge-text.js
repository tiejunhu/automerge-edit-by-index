// Apply the paper editing trace to an Automerge.Text object, one char at a time
const { edits, finalText } = require('./editing-trace')
const { next: Automerge } = require("@automerge/automerge")
const start = new Date()

let doc = Automerge.from({text: ""})

for (let i = 0; i < edits.length; i++) {
  doc = Automerge.change(doc, doc => {
    if (edits[i][1] > 0) return Automerge.splice(doc, ["text"], edits[i][0], edits[i][1])
    if (edits[i].length > 2) return Automerge.splice(doc, ["text"], edits[i][0], edits[i][1], edits[i][2])
  })
}
console.log(`Processed ${edits.length} edits in ${new Date() - start} ms`)

if (doc.text !== finalText) {
  throw new RangeError('ERROR: final text did not match expectation')
}

data = Automerge.save(doc)

// write to file
const fs = require('fs')
fs.writeFileSync('automerge-text.data', data)
