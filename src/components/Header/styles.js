import {styled} from 'styled-components'

export const HeaderContainer = styled.header`
    border-radius: 15px;
    width: 100%;
    display: flex;
    padding: 20px 3%;
    align-items: center;
    justify-content: space-between;

    h1{
        display: flex;
        align-items: center;
        background: #f9f5f6ff;
        padding: 10px 20px;
        border-radius: 15px;
        
        span{
            font-family: "Creepster", system-ui;
        }
    }

    nav{
        background: #222222;
        padding: 10px 20px;
        border-radius: 15px;
        
        display: flex;
        gap: 20px;

        a{
            font-family: "Creepster", system-ui;
            font-size: 1.2rem;
            transition: all 1s;
            color: white;
            
            &:hover{
                color: red;
            }
        }
    }

    @media screen and (max-width: 540px){
        flex-direction: column;
        gap: 20px;
    }
`