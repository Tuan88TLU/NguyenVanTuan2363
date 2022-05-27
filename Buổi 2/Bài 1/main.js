const content = document.querySelector('.main-header');
const deleteBT = document.querySelector('.deletes');
const cancelBT = document.querySelector('.cancel');
const confirmBT = document.querySelector('.confirm');
const thongbao = document.querySelector('.main');


deleteBT.addEventListener("click",function()
{
    thongbao.classList.add("active");
});

cancelBT.addEventListener('click',function()
{
    thongbao.classList.remove("cancel");
})

confirmBT.addEventListener('click',function()
{
    content.classList.add("comfirm");
})