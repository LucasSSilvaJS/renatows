import {styled} from 'styled-components'
import { Content } from '../../utility'

export const ContentHome = styled(Content)`
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;

    & > h2{
        font-family: "Nosifer", sans-serif;
        color: #f9f6f5;
        padding: 10px 20px;
        text-align: center;
        text-shadow: 5px 5px 0 #8a0000, 0 0 10px #000000;
    }
`
export const Videos = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    gap: 20px;

    article{
        flex-basis: calc(33.3% - 20px);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        
        iframe{
            width: 100%;
            height: 250px;
            border: 0;
        }

        @media screen and (max-width: 960px){
            flex-basis: calc(50% - 20px);

            &:first-child{
                flex-basis: 100%;

                iframe{
                    height: 300px;
                }
            }
        }

        @media screen and (max-width: 670px){
            flex-basis: 100%;

            iframe{
                height: 300px;
            }
        }
    }
`

export const MaisVideos = styled.a`
    background: red;
    color: #f9f6f5;
    padding: 10px 50px;
    border-radius: 20px;
    transition: box-shadow 1s;
    
    &:hover{
       background: #f9f6f5;
       color: red;
       box-shadow: 5px 5px 0 #000000;
    }
`