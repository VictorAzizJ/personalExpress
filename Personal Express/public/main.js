var trash = document.getElementsByClassName("fa-trash");
var check = document.getElementsByClassName("fa-check-square");


Array.from(trash).forEach(function (element) {
  element.addEventListener('click', function () {
    const can = this.parentNode.parentNode.childNodes[1].innerText
    console.log(can);





fetch('Stock', {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'item': can.trim(),
    // 'msg': msg
  })
}).then(function (response) {
  window.location.reload()

})
});
});

Array.from(check).forEach(function (element) {
  element.addEventListener('click', function () {
    debugger
    const can = this.parentNode.parentNode.childNodes[1].innerText
    console.log(can); //this is the correct task

    // const msg = this.parentNode.parentNode.childNodes[3].innerText
    fetch('dump', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'item': can.trim(),
        // 'msg': msg
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
});
























/*var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");
var thumbDownn = document.getElementsByClassName("fa-thumbs-down")

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        
        fetch('Supplies', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'msg': msg,
            'thumbUp': true
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(thumbDownn).forEach(function(element) {
  element.addEventListener('click', function(){
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const msg = this.parentNode.parentNode.childNodes[3].innerText
    
    fetch('Supplies', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': name,
        'msg': msg,
        'thumbUp': false,
        
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('Supplies', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});*/ 

