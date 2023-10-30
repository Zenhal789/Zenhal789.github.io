$(document).ready(function() {
    $('.number').click(function() {
        var value1 = $(this).val();
        var value2 = $("#output").val();
        $("#output").val(value2 + value1);
    });
    $('.operator').click(function() {
        var value1 = $(this).val();
        var value2 = $("#output").val();
        $("#output").val(value2 + value1);
    });
    $('.operator2').click(function(){
        var f=eval($("#output").val())
        $("#output").val(f);
    });
    $(document).on("click","#sin",function(){
        var f=Math.sin($("#output").val());
        $("#output").val(f);
    });
    
    
    $(document).on("click","#cos",function(){
        var f=Math.cos($("#output").val());
        $("#output").val(f);
    }); 
    
    
    $(document).on("click","#tan",function(){
        var f=Math.tan($("#output").val());
        $("#output").val(f);
    }); 
       
       
    $(document).on("click","#log",function(){
        var f=Math.log10($("#output").val());
        $("#output").val(f);
    }); 
    $(document).on("click",".clear",function(){
        $("#output").val("");
    })
    
    $(document).on("click",".backspace",function(){

        var r=$("#output").val();
               
        r=r.substring(0,r.length -1);
    
        $("#output").val(r);
    })
});
