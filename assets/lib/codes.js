class DB {
  constructor(url) {
    firebase.initializeApp({databaseURL: url})
    this.database = firebase.database()
  }

  download(endpoint, callback) {
    this.database.ref(endpoint).once('value')
      .then(function(snapshot) {
        callback(snapshot.val())
      })
  }
}


class TP {
  constructor(id) {
    let source = document.querySelector('#' + id).innerHTML
    this.template = Handlebars.compile(source)
  }

  generate(context) {
    return this.template(context)
  }
}
