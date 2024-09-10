import './core/moni';

moni.loaded(() => {

  moni('button').on('click', function () {

    moni('ul li').siblings().css('color', 'red');

  });

});
