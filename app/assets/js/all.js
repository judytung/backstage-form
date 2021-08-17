$('.expand-more').click(function (e) {
    e.preventDefault();
     $(this).toggleClass('active');
    // 請使用 toggleClass 完成此作業
   });

ClassicEditor
   .create( document.querySelector( '#editor' ) )
   .then( editor => {
           console.log( editor );
   } )
   .catch( error => {
           console.error( error );
   } );

var replyBtn = document.querySelector('.reply-btn');
var cancelBtn = document.querySelector('.cancel-btn');
var authorReply = document.querySelector('.author-reply');
var authorEdit = document.querySelector('.author-editor');
var groupBtn = document.querySelector('.btn-group');
var replySection = document.querySelector('.reply-section');

replyBtn.addEventListener('click',function(){
    groupBtn.classList.add('d-none');
    authorReply.classList.add('d-none');
    authorEdit.classList.add('d-block');
    replySection.classList.add('changestyle');
});
cancelBtn.addEventListener('click',function(){
    groupBtn.classList.remove('d-none');
    authorReply.classList.remove('d-none');
    authorEdit.classList.remove('d-block');
})

