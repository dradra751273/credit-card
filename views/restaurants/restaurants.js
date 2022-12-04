const bookingBtns = document.querySelectorAll('.booking-btn')
const modalInputRestaurantId = document.querySelector('.modal-input-restaurant_id')
const modalInputDatingTime = document.querySelector('.modal-input-dating_time')
const modalLabel = document.querySelector('#modalLabel')

bookingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const restaurant_id = btn.dataset.restaurant_id
    const name = btn.dataset.name
    const dating_time = btn.previousElementSibling.value

    // Fill information
    if(dating_time){
      modalLabel.innerHTML=`就決定來吃【${name}】了!`
    }else{
      modalLabel.innerHTML=`就決定來吃【${name}】了! 日期我們再用line約~`
    }
    modalInputRestaurantId.value = restaurant_id
    modalInputDatingTime.value = dating_time
  })
})

