import moni from "./core/moni";

moni.loaded(() => {

  moni('button').on('click', function () {
    alert(1);
  });

});