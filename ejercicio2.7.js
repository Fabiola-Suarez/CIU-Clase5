function getProcessedData(url) {
    return downloadData(url) // returns a promise
      .catch(e => {
        return downloadFallbackData(url)  // returns a promise
      })
      .then(v => {
        return processDataInWorker(v); // returns a promise
      });
}

  
// Con Async//

async function getProcessedData(url) {
    try{
        const downloadData = await fetch;
        const downloadFallbackData = await fetch;
        const processDataInWorker = await fetch; 
        
        return downloadData(url) // returns a promise

    } catch {

        return downloadFallbackData(url)  // returns a promise
    }
      then(v => {
        return processDataInWorker(v); // returns a promise
      });
}

