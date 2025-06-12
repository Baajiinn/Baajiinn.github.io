// Node.js + Express
app.use((req, res) => {
  const target = 'https://itexamanswers.net/ccna…';
  fetch(target)
    .then(r => r.text())
    .then(body => {
      res.set('Access-Control-Allow-Origin', '*');
      res.send(body);
    });
});
