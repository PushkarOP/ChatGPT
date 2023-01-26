// Add JavaScript code to send the message to the ChatGPT API
function sendMessage() {
  // Get the input value
  var input = document.getElementById("input").value;

  // Get the API key from the environment variable
  const apiKey = process.env.API_KEY;

  // Send the input to the ChatGPT API and get the response
  fetch('https://api.openai.com/v1/engines/davinci/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      prompt: input,
      temperature: 0.5,
      max_tokens: 100,
      top_p: 1
    })
})
.then(response => response.json())
.then(data => {
// Display the response in the output div
var output = document.getElementById("output");
output.innerHTML = data.choices[0].text;
});
}