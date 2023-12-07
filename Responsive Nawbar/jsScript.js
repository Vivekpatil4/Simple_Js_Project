const btns = document.querySelector(".bars");
const nawid = document.getElementById('naw_id');

var flg=0;
btns.addEventListener('click',function(){

	if(flg==0)
	{
		nawid.style.display = 'block'
		nawid.style.color='orange'
		nawid.style.margin = '50px 35px'

		flg=1+1;
	}
	else
	{
		nawid.style.display = "none"
		flg=0
	}
	
})