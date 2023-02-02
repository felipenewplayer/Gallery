import * as C from './styles';

type Props = {
    name: string,
    url: string
}

export const PhotoItem = ({name, url}: Props) =>{
    return(
        <C.Cotainer>
           <img src={url} alt={name} />
           {name}
        </C.Cotainer>
    )
}
