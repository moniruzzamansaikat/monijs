import moni from './core/moni';

moni('form').on('submit', e => {
  e.preventDefault();

  const formData = moni('form').values();

  moni()
    .ajax()
    .request('http://localhost:3000/users')
    .type('POST')
    .loading(() => console.log('Loading...'))
    .header({
      'Content-Type': 'application/json',
    })
    .send(formData)
    .failed((error) => console.error(error))
    .success((response) => console.log('Success:', response))
    .end(() => console.log('Request finished'))
    .execute();

});