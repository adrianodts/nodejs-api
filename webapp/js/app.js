(function($) {
    console.log('Hello', $)
    
    $(document).ready(function() {

        const listCategorie = () => {
            
            $.get('http://localhost:3000/categories', function(result){
                
                if (!result.data.length && !result.status) {
                    return;
                }
                result.data.forEach((categorie) => {
                    let template =  '<option value="' + categorie._id + '">' + categorie.name + '</option>' 
                    $('#selectCategorie').append(template); 
                });
                $('#selectCategorie').val('');
            })
        }

        const listData = function() {
            $('#list_table tbody').empty();
            
            $.get('http://localhost:3000/bills', function(result){
                
                if (!result.data.length && !result.status) {
                    return;
                }
                result.data.forEach((bill) => {
                    let template =  '<tr> ' + 
                                    '   <td>' + bill.title + '</td> ' + 
                                    '   <td>' + bill.price + '</td> ' +
                                    '   <td><a href=http://localhost:3000/address/"' + bill.cep + '" target="_blank">'+ bill.cep +'</a></td> ' +
                                    '   <td>' + bill.category.name + '</td> ' +
                                    '   <td> <button type="button" id="btn_delete" class="btn btn-danger btn-small" data-id="' + bill._id + '">Delete</button></td> ' +
                                    '</tr> '
                    $('#list_table tbody').append(template); 
                });
            })
        }

        const createData = function() {
            let title = $('input[name=title]').val()
            let price = $('input[name=price]').val()
            let category = $('#selectCategorie').val()
            let cep = $('input[name=cep]').val()

            if (!title || !price) {
                console.log('Invalid body')
                return;
            }
            let data =  { title: title, price: price, category: category, cep: cep }

            $.post('http://localhost:3000/bills', data, function(result){
                if (!result.status) {
                    return;
                }
                listData();
                $('input[name=title]').val('');
                $('input[name=price]').val('');
                $('#selectCategorie').val('')
                $('input[name=cep]').val('');
            })
        }

        const createCategorie = function() {
            let name = $('input[name=name]').val()

            if (!name) {
                console.log('Invalid body')
                return;
            }
            let data =  { name: name }

            $.post('http://localhost:3000/categories', data, function(result){
                if (!result.status) {
                    return;
                }
                $('input[name=name]').val('');
            })
        }

        const deleteData = function() {
            let id = $(this).data('id')
            let url = 'http://localhost:3000/bills/'+id

            $.ajax({
                url: url, 
                type: 'DELETE',
                success: function(result){
                    listData();
                }
            })
        }

        listCategorie()
        listData()

        $('#btn_create_cat').on('click', createCategorie)
        $('#btn_create').on('click', createData)
        $('#list_table tbody').on('click', '#btn_delete', deleteData);
        
    })
})(jQuery)