document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://co-design-grupo-2-projeto-1.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpGoals = new TP('template-goals')

  let tpGoals_1 = new TP('template-goals_1')
  
  let tpImg = new TP('template-img')

  let tpImg_1 = new TP('template-img_1')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/' + params.get('course') + '/'

  console.log(url)

  db.download(url, function(data) {

    console.log(data)

    let title = document.querySelector('.title')
    title.innerHTML = data['name']

    let main_text_left_txt = document.querySelector('.main_text_left_txt')
    main_text_left_txt.innerHTML =  data['goals']

    let main_text_right_txt1 = document.querySelector('.main_text_right_txt1')
    main_text_right_txt1.innerHTML =  data['goals-1']

    let main_text_left_jpg = document.querySelector('.main_text_left_jpg')
    main_text_left_jpg.innerHTML =  data['img']

     let main_text_right_jpg = document.querySelector('.main_text_right_jpg')
    main_text_right_jpg.innerHTML =  data['img-1']
  })
})
