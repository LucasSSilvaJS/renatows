import Header from "../../components/Header";
import { Container } from "../../utility";
import perfil from '../../assets/perfil.png'
import { ContentAbout, Channel, MoreInfo, MisteryButton } from "./styles";
import { BsCollectionPlayFill, BsFillPersonCheckFill } from "react-icons/bs";
import {frasesDeTerror} from './frasesDeTerror'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { setChannel } from "../../redux/channel/slice";
import { useEffect } from "react";

function About() {
    const dispatch = useDispatch()

    const {channel} = useSelector(rootReducer => rootReducer.channel)

    useEffect(() => {
        dispatch(setChannel())
    }, [dispatch])

    function handleMessage(){
        const arraySize = frasesDeTerror.length
        const fraseAleatoria = Math.floor(Math.random()*arraySize)
        toast.dark(frasesDeTerror[fraseAleatoria])
    }

    return ( 
        <Container>
            <Header/>
            <ContentAbout>
                <Channel>
                    <img src={perfil} alt="perfil" />
                    <hr/>
                    <p>Renatows é um influenciador e criador de conteúdo especializado em jogos de terror no YouTube. Ele combina suas paixões por sustos e storytelling para atrair um público que gosta de terror mas prefere evitar sustos diretos. Renatows enfrenta desafios como estabelecer sua marca e se destacar na plataforma, mas continua a crescer graças à sua dedicação e habilidade de envolver o público com vídeos bem produzidos e uma pitada de humor. Seus vídeos destacam a imersão e as histórias dos jogos de terror.</p>
                </Channel>
                <MoreInfo>
                    <span>
                    <BsFillPersonCheckFill size={20} color="#222"/>
                        Numero de inscritos: <strong>{channel ? channel.subs : '...carregando'}</strong>
                    </span>
                    <span>
                        <BsCollectionPlayFill size={20} color="#222"/>
                        Quantidade de vídeos postados: <strong>{channel ? channel.videos : '...carregando'}</strong>
                    </span>
                </MoreInfo>
                
                <MisteryButton>
                    <button onClick={handleMessage}>Aperte o botão para receber uma mensagem misteriosa!!!</button>
                </MisteryButton>
            </ContentAbout>
        </Container>
     );
}

export default About;