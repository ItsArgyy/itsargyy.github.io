function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txt_ano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {

        window.alert ('Preencha os dados corretamente e tente novamente!')

        } else if (fano.value < (ano - 106)) {

            window.alert ('Você não pode ter mais de 106 anos.')

            } else {

                var fsex = document.getElementsByName('rad_sex')
                var idade = ano - Number(fano.value)
                var genero = ''
                var img = document.createElement('img')
                img.setAttribute('id', 'foto')

                if (fsex[0].checked)    {

                    genero = 'um homem'
                    if (idade >=0 && idade <12) {
                        //criança
                        img.setAttribute('src', 'imagens/criancam.png')
                        } else if (idade < 25){
                            //jovem
                            img.setAttribute('src', 'imagens/jovemm.png')
                            } else if (idade < 50){
                                //adulto
                                img.setAttribute('src', 'imagens/adultom.png')
                                } else {
                                    //idoso
                                    img.setAttribute('src', 'imagens/idosom.png')
                                    }

                } else if (fsex [1].checked)    {

                    genero = 'uma mulher'
                    if (idade >=0 && idade <12) {
                        //criança
                        img.setAttribute('src', 'imagens/criancaf.png')
                        } else if (idade < 25){
                            //jovem
                            img.setAttribute('src', 'imagens/jovemf.png')
                            } else if (idade < 50){
                                //adulto
                                img.setAttribute('src', 'imagens/adultof.png')
                                } else {
                                    //idoso
                                    img.setAttribute('src', 'imagens/idosof.png')
                                    }

                    }else{

                        window.alert ('Preencha os dados corretamente e tente novamente!')

                        }

                res.style.textAlign = 'center'
                res.innerHTML = (`Detectamos ${genero} de ${idade} anos `)
                res.appendChild(img)

                }

}