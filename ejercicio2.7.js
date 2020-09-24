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
        const down = await downloadData(url).catch(await downloadFallbackData(url));
        const process = await processDataInWorker(dow);
      
        return process;
      } catch(e){
        console.error(e.message)
      }
}

