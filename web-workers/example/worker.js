var count = 0
onmessage = function (e) {
  console.log('Message received from main script')
  console.log(e.data)

  if (typeof e.data.type === 'undefined') throw new Error('Message needs a type')

  switch(e.data.type) {
    case 'increment':
      increment(e.data.data)
      break
    case 'sortArray':
      sortArray(e.data.data)
      break
  }
}

function sortArray (data) {
  postMessage({type: 'sortArray', 'data': data.sort()})
}

function increment (data) {
  setInterval(function () {
    console.log('Posting message back to main script')
    postMessage({type: 'increment', 'data': count += 1})
    if (count === 2) close()
  }, 500)
}
