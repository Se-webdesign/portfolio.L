$(function(){
  // var top = $("#header").offset().top;
  // var scroll = $(window).scrollTop();
  // if(scroll >= top) {
  //   $("#header").addClass("m_fixed");
  // }else {
  //   $("#header").removeClass("m_fixed");
  // }

  $('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#00a8ff',
    speed: .25
  });

  $("#o1").click(function() {
    $(this).hide();
    $("#c1").fadeIn();
    $("#a1").slideDown();
  }) 

  $("#c1").click(function() {
    $(this).hide();
    $("#o1").fadeIn();
    $("#a1").slideUp();
  }) 

  $("#o2").click(function() {
    $(this).hide();
    $("#c2").fadeIn();
    $("#a2").slideDown();
  }) 

  $("#c2").click(function() {
    $(this).hide();
    $("#o2").fadeIn();
    $("#a2").slideUp();
  }) 

  $("#o3").click(function() {
    $(this).hide();
    $("#c3").fadeIn();
    $("#a3").slideDown();
  }) 

  $("#c3").click(function() {
    $(this).hide();
    $("#o3").fadeIn();
    $("#a3").slideUp();
  }) 

  $("#o4").click(function() {
    $(this).hide();
    $("#c4").fadeIn();
    $("#a4").slideDown();
  }) 

  $("#c4").click(function() {
    $(this).hide();
    $("#o4").fadeIn();
    $("#a4").slideUp();
  }) 


  $("#rain").raindrops({
    color: "#00a8ff",
    canvasHeight: 400
  });

  $("#open").click(function() {
    $(this).hide();
    $(".sp-header").slideDown();
  })

  $(".c").click(function() {
    $(".sp-header").slideUp();
    setTimeout(function(){
      $("#open").fadeIn();
    },400);
  })
});

function confirm() { // 問い合わせるボタンをクリックした場合
  document.getElementById('popup').style.display = 'block';
  return false;
}

function okfunc() { // OKをクリックした場合
  document.getElementById('popup').style.display = 'none';
  document.getElementById('done').style.display = 'block';
}

function nofunc() { // キャンセルをクリックした場合
  document.getElementById('popup').style.display = 'none';
}

function donefunc() { // OKをクリックした場合
  document.getElementById('done').style.display = 'none';
}


// window.onload = function() {
  // funcload();
//   funcbubble();
// };

// function funcload() {
//   setTimeout(function(){
//     $("#load").fadeOut("slow");
//     $("#main").fadeIn("slow");
//   },3000);
// }

// function funcbubble() {
//   Particles.init({
//     selector: '.bubble',
//     color: ["#6DB4D9","#30B0F2","#fff"],
//     sizeVariations: 30
//   });
// }

window.addEventListener('load', function(){
  Particles.init({
    selector: '.bubble',
    color: ["#6DB4D9","#30B0F2","#fff"],
    sizeVariations: 30
  });
});

// window.addEventListener('load', function(){
//   setTimeout(function(){
//     $("#load").fadeOut("slow");
//     $("#main").fadeIn("slow");
//   },3000);
// });


// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){
  // ふわっ
  $('.fade').each(function(){ //fadeというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
