if (window.Worker) {
  var myWorker = new Worker('worker.js')
  myWorker.onmessage = function (e) {
    console.log('Message received from worker', e)
  }

  myWorker.postMessage({'type': 'increment'})
  myWorker.postMessage({'type': 'sortArray', data: [1, 2, 8, 3, 5, -1]})

  myWorker.addEventListener('error', function (error) {
    console.log(' Error Caused by worker: ' + error.filename +
      ' at line number: ' + error.lineno +
      ' Detailed Message: ' + error.message)
  })
}
