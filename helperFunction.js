// manipulate responseField to render a formatted and appropriate message
const renderResponse = (res) => {
  if(res.errors){
    responseField.innerHTML = "<p id='msg'>Sorry, couldn't format your URL.</p><p id='tip'>Plase check, have you entered the correct URL starting with https:// or http://</p><button id='retry' onClick='window.location.reload();'>Retry</button>"
  } else {
    responseField.innerHTML = `<p id='msg'>Your shortened url is: </p><p id="url-text"><a href=${res.shortUrl} target="_blank">${res.shortUrl}</a></p><br><input type="text" id='url' value = ${res.shortUrl} /><button id="copy" onClick='myFunction()'>Copy</button><br> <button id="retry" onClick='window.location.reload();'>Retry</button>`
  }
    

}

// manipulate responseField to render an unformatted response
const renderRawResponse = (res) => {
    
    
  if(res.errors){
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>"
  } else {
    let structuredRes = JSON.stringify(res).replace(/,/g, ", \n")
    structuredRes = `<pre>${structuredRes}</pre>`

    responseField.innerHTML = `${structuredRes}`
  }
}
