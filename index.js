function likeOrDislike(likebtn,dislikebtn,input1,input2) {
	likebtn.addEventListener('click', () => {
	input1.value = parseInt(input1.value) + 1
	input1.style.color = '#12ff00'
})

dislikebtn.addEventListener('click', () => {
	input2.value = parseInt(input2.value) + 1
	input2.style.color = '#ff0000'
})
}

var likebtn_1 = document.getElementById('likebtn_1')
var dislikebtn_1 = document.getElementById('dislikebtn_1')
var input1_1 = document.getElementById('input1_1')
var input2_1 = document.getElementById('input2_1')
likeOrDislike(likebtn_1,dislikebtn_1,input1_1,input2_1)

var likebtn_2 = document.getElementById('likebtn_2')
var dislikebtn_2 = document.getElementById('dislikebtn_2')
var input1_2 = document.getElementById('input1_2')
var input2_2 = document.getElementById('input2_2')
likeOrDislike(likebtn_2,dislikebtn_2,input1_2,input2_2)

var likebtn_3 = document.getElementById('likebtn_3')
var dislikebtn_3 = document.getElementById('dislikebtn_3')
var input1_3 = document.getElementById('input1_3')
var input2_3 = document.getElementById('input2_3')
likeOrDislike(likebtn_3,dislikebtn_3,input1_3,input2_3)

var likebtn_4 = document.getElementById('likebtn_4')
var dislikebtn_4 = document.getElementById('dislikebtn_4')
var input1_4 = document.getElementById('input1_4')
var input2_4 = document.getElementById('input2_4')
likeOrDislike(likebtn_4,dislikebtn_4,input1_4,input2_4)

var likebtn_5 = document.getElementById('likebtn_5')
var dislikebtn_5 = document.getElementById('dislikebtn_5')
var input1_5 = document.getElementById('input1_5')
var input2_5 = document.getElementById('input2_5')
likeOrDislike(likebtn_5,dislikebtn_5,input1_5,input2_5)

var likebtn_6 = document.getElementById('likebtn_6')
var dislikebtn_6 = document.getElementById('dislikebtn_6')
var input1_6 = document.getElementById('input1_6')
var input2_6 = document.getElementById('input2_6')
likeOrDislike(likebtn_6,dislikebtn_6,input1_6,input2_6)