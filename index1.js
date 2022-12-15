function changeStyle(){
    var get_width=  document.getElementById("width").value
    document.getElementById("kvadrat").style.width = get_width

    var get_height=  document.getElementById("height").value
    document.getElementById("kvadrat").style.height = get_height

    var get_color=  document.getElementById("bg.color").value
    document.getElementById("kvadrat").style.background = get_color

    var get_pos=  document.getElementById("position").value
    document.getElementById("kvadrat").style.position = get_pos

    var get_top=  document.getElementById("top").value
    document.getElementById("kvadrat").style.top = get_top

    var get_left=  document.getElementById("left").value
    document.getElementById("kvadrat").style.left = get_left

    var get_tran=  document.getElementById("tra").value
    document.getElementById("kvadrat").style.transition= get_tran

    var get_bor=  document.getElementById("bor").value
    document.getElementById("kvadrat").style.border= get_bor

    var get_link=  document.getElementById("link").value
    document.getElementById("kvadrat").style.backgroundImage= get_link
}