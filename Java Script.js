document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://co-design-grupo-2-projeto-1.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpGoals = new TP('template-goals')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/' + params.get('course') + '/'

  console.log(url)

  db.download(url, function(data) {

    console.log(data)

    let title = document.querySelector('.title')
    title.innerHTML = data['name']

    let main_text = document.querySelector('.main_text')
    main_text.innerHTML =  data['goals']
  })
})
