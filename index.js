const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const fakeCurrentCommunityJson = {'id': 0, 'name': 'Elixia Kamppi', 'address': 'Fredrikinkatu 48, 00100 Helsinki',
    'rate': 13, 'img_url':'https://s3.eu-central-1.amazonaws.com/relivee/elixia_kamppi.jpg',
    'members': [
        {'id': 0, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
        'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 1, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
        'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 2, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 3, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 4, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 5, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 6, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 7, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 8, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 9, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 10, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 11, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'},
        {'id': 12, 'name': 'Mehrad' , 'communityRate': 90, 'totalRate': 80, 'interactionsWithUser' : 1,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/0.jpg'},
        {'id': 13, 'name': 'Barack' , 'communityRate': 100, 'totalRate': 100, 'interactionsWithUser' : 0,
            'imageUrl': 'https://s3.eu-central-1.amazonaws.com/relivee/profile/1.jpg'}
        ]};

function fakeQuestion(userId) {return {'id': 0, 'firstName': 'Obama', 'userId':userId,
    'text': "What movie he has watched last?", "userImageUrl":
        'https://s3.eu-central-1.amazonaws.com/relivee/profile/'+userId+'.jpg'}}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/communities/current', (req, res) => res.json(fakeCurrentCommunityJson))
  .get('/questions/:userId', (req, res) => res.json(fakeQuestion(req.params.userId)))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
