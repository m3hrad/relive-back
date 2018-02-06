const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var fakeCurrentCommunityJson = {'name': 'Elixia Kamppi', 'address': 'Fredrikinkatu 48, 00100 Helsinki',
'members': [1,2,3], 'rate': 13};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/communities/current', (req, res) => res.json(fakeCurrentCommunityJson))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
