for (var i = 0; i < 5; i++) {
  setTimeout(
    (function(i) {
      if (i < 4) {
        return function() {
          console.log(i);
        };
      } else {
        return async () => {
          await setTimeout(() => {
            console.log(i);
          }, 5000);
        };
      }
    })(i),
    i * 1000
  );
}
