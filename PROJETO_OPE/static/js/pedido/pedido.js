lista_produto = []
var csrftoken = $("[name=csrfmiddlewaretoken]").val();
var app = new Vue({
    el:'#pedido_orcamento',
    data:{
      dados:[
      {
      	'produto':' ',
          'quantidade':'',
          'preco': '',
      },


    ],

    },
    methods:{
      add_linha:function(){
          this.dados.push({
          'produto':'  ',
          'quantidade':'',
          'preco': '',
        })
        console.log(this.dados);
      },
      excluir_linha:function(index){
      	if(this.dados.length >1){
      		this.dados.splice(index,1)
      	}

      },
      post_data: function(){

      $.ajax({
        url: '/pedidos/store',
        headers: { "X-CSRFToken":  csrftoken },
        type:'POST',
        data:{'produtos':{'data':this.dados} , 'cliente':$('select[name="cliente_pedido"]').val(),'atendente':$('select[name="atendente_pedido"]').val()},
        sucess: function(data){
          console.log(data);
        },
        error: function(err){
          console.log(err);
        }
      })

}
      }



  });
