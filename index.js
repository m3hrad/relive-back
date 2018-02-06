const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

var fakeCurrentCommunityJson = {'id': 0, 'name': 'Elixia Kamppi', 'address': 'Fredrikinkatu 48, 00100 Helsinki',
    'rate': 13, 'img_url':'https://s3.eu-central-1.amazonaws.com/relivee/elixia_kamppi.jpg',
    'members': [
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
        'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
        'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'}
        ]};

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/communities/current', (req, res) => res.json(fakeCurrentCommunityJson))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
