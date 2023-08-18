function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('Parece que alguém digitou o ano de nascimento errado... :)')
    }   
else
{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked && idade >=0 && idade < 10)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorrinho filhote de 4 meses.')
        img.setAttribute('src', 'cachorrofilhote.png')
    }
    else if (fsex[0].checked && idade >=10 && idade < 20)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorrinho filhote de 1 ano.')
        img.setAttribute('src', 'cachorrofilhote.png')
    }
    else if (fsex[0].checked && idade >=20 && idade < 30)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro jovem de 3 anos.')
        img.setAttribute('src', 'cachorrojovem.png')
    }
    else if (fsex[0].checked && idade >=30 && idade < 40)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro jovem de 5 anos.')
        img.setAttribute('src', 'cachorrojovem.png')
    }
    else if (fsex[0].checked && idade >=40 && idade < 50)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro adulto de 7 anos.')
        img.setAttribute('src', 'cachorroadulto.png')
    }
    else if (fsex[0].checked && idade >=50 && idade < 60)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro adulto de 10 anos.')
        img.setAttribute('src', 'cachorroadulto.png')
    }
    else if (fsex[0].checked && idade >=60 && idade < 70)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro idoso de 13 anos.')
        img.setAttribute('src', 'cachorroidoso.png')
    }
    else if (fsex[0].checked && idade >=70 && idade < 80)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Um cachorro idoso de 16 anos.')
        img.setAttribute('src', 'cachorroidoso.png')
    }

    if (fsex[1].checked && idade >=0 && idade < 10)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadelinha filhote de 4 meses.')
        img.setAttribute('src', 'cadelafilhote.png')
    }
    else if (fsex[1].checked && idade >=10 && idade < 20)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadelinha filhote de 1 ano.')
        img.setAttribute('src', 'cadelafilhote.png')
    }
    else if (fsex[1].checked && idade >=20 && idade < 30)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela jovem de 3 anos.')
        img.setAttribute('src', 'cadelajovem.png')
    }
    else if (fsex[1].checked && idade >=30 && idade < 40)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela jovem de 5 anos.')
        img.setAttribute('src', 'cadelajovem.png')
    }
    else if (fsex[1].checked && idade >=40 && idade < 50)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela adulta de 7 anos.')
        img.setAttribute('src', 'cadelaadulta.png')
    }
    else if (fsex[1].checked && idade >=50 && idade < 60)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela adulta de 10 anos.')
        img.setAttribute('src', 'cadelaadulta.png')
    }
    else if (fsex[1].checked && idade >=60 && idade < 70)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela idosa de 13 anos.')
        img.setAttribute('src', 'cadelaidosa.png')
    }
    else if (fsex[1].checked && idade >=70 && idade < 80)
    {
        res.innerHTML = ('Se fosse um cão... você seria: Uma cadela idosa de 16 anos.')
        img.setAttribute('src', 'cadelaidosa.png')
    }
    res.appendChild(img)
    
}
}