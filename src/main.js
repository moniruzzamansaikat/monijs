import './core/moni';

moni.loaded(() => {

  moni('button').on('click', function () {
    const children = moni('ul').children()

    console.log(children)
  })

});