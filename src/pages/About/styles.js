import {styled} from 'styled-components'
import { Content } from '../../utility'

export const ContentAbout = styled(Content)`
    flex-direction: column;
    gap: 25px;
`

export const Channel = styled.section`
    display: flex;
    gap: 20px;

    img{
        align-self: center;
        height: 90px;
        width: 90px;
        object-fit: cover;
        border-radius: 50%;
    }

    hr{
        border: 1px solid #2222223a;
    }

    p{
        text-align: justify;
    }

    @media screen and (max-width: 778px){
        flex-direction: column;
    }
`

export const MoreInfo = styled.section`
    display: flex;
    align-items: center;
    background: #22222235;
    border-radius: 15px;
    padding: 20px 40px;
    gap: 20px;

    @media screen and (max-width: 778px){
        flex-direction: column;
    }

    span{
        display: flex;
        align-items: center;
        gap: 5px;
    }
`

export const MisteryButton = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    button{
        cursor: pointer;
        border: 0;
        padding: 10px 20px;
        border-radius: 15px;
        font-family: "Creepster", system-ui;
        letter-spacing: 2px;
        text-shadow: 0 0 15px #11ff00;
        color: #f9f6f5;
        background: #222;
        transition: all 1s;
        opacity: 0.5;

        &:hover{
            opacity: 1;
        }
    }
`