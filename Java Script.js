document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://co-design-grupo-2-projeto-1.firebaseio.com/')

  let tpName = new TP('title')

  let tpGoals = new TP('main_text')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    let name = document.querySelector('.name')
    name.innerHTML = tpName.generate({'name': data['name']})

    let goals = document.querySelector('.goals')
    goals.innerHTML = tpGoals.generate({'goals': data['goals']})
  })
})
