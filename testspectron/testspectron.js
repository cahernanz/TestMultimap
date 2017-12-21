// A simple test to verify a visible window is opened with a title
var Application = require('spectron').Application
var assert = require('assert')

var app = new Application({
  path: '/opt/multimap/multimap'
})

app.start().then(function () {
  // Check if the window is visible
  return app.browserWindow.isVisible()
}).then(function (isVisible) {
  // Verify the window is visible
  console.log("isVisible: "+isVisible)
  assert.equal(isVisible, true)

}).then(function () {
  // Get the window's title
  //return app.client.getTitle()
  return app.browserWindow.getTitle()


}).then(function (title) {
  // Verify the window's title
  console.log("Title: "+title)
  assert.equal(title, '--multimap-v1.3.0')


  //////////////////////////////////////////pruebas
  return app.isRunning()
}).then(function (isRunning) {
  // Verify the window is running
  console.log("IsRunning: " + isRunning)
  assert.equal(isRunning, true)

}).then(function () {
  return app.getSettings()
  console.log("Settings: "+app.getSettings())

}).then(function () {
  return app.client.getMainProcessLogs().then(function (logs) {
  logs.forEach(function (log) {
    console.log("Log: "+log)
  })
})

}).then(function () {
  return app.client.getRenderProcessLogs().then(function (logs) {
  logs.forEach(function (log) {
    console.log("Log mesage: "+log.message)
    console.log("Log source: "+log.source)
    console.log("Log level: "+log.level)
  })
})










}).then(function () {
  return app.client.getSelectedText().then(function (selectedText) {
  console.log("selectedText: "+selectedText)
})



/*}).then(function () {
  return app.browserWindow.getZoomLevel().should.eventually.equal(0);
  console.log("Zoom: "+app.browserWindow.getZoomLevel())*/





//////esto son cosas del cliente... lo que debe comunicarse con un server por eso aqui no hace nada
/*app.client.waitUntilTextExists('#message', 'Success', 10000)
app.client.waitUntilWindowLoaded(10000)
app.client.windowByIndex(1)*/

app.browserWindow.waitUntilTextExists('#message', 'Success', 10000)
app.browserWindow.waitUntilWindowLoaded(10000)
app.browserWindow.windowByIndex(1)




  //////////////////////////////////////////pruebas
}).then(function () {
  // Stop the application
  return app.stop()

}).catch(function (error) {
  // Log any failures
  console.error('Test failed', error.message)
})
