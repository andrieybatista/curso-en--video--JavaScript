var agora = new Date ()
var diaSem = agora.getDay()
/*
0 = domingo
1 = segunda 
2 = terça
3 = quarta 
4 = quinta 
5 = cexta 
6 = sabádo 
*/

console.log(diasem)

switch(diasem){
    case 0:
    console.log('domingo')
    break
    case 1:
        console.log('segunda ')
        break
        case 2 :
            console.log('terça')
            break
            case 3 :
                console.log('quarta')
                break
                case 4:
                    console.log('quinta')
                    break
                    case 5:
                        console.log ('cexta')
                        break
                        case 6:
                            console.log('sabádo')
                            break
                default:
                    console.log('[erro] dia inválido!')
}                     break