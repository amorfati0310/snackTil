import express from 'express';

const app = express();

app.get('/', (req, res)=> {
    res.send('hello wolrd ts');
});

app.listen(3000, ()=> {
    console.log('server start ...')
    console.log('watch???')
});


// ts-quickstart express 참고