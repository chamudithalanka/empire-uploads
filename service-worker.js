// Sending context
window.addEventListener('message', (event) => {
    // Send a message to the service worker
    navigator.serviceWorker.controller.postMessage('Hello from the page!');
    // Set a timeout for the response
    setTimeout(() => {
      if (!responseReceived) {
        console.error('Response timeout!');
      }
    }, 5000); // 5 seconds timeout
  });
  
  let responseReceived = false;
  
  // Service worker
  self.addEventListener('message', (event) => {
    // Simulate a long-running operation
    setTimeout(() => {
      event.source.postMessage('Hello from the service worker!');
    }, 2000); // 2 seconds delay
    return true; // Indicate asynchronous response
  });