import Header from "../../components/Header";
import { Container } from "../../utility";
import { ContentHome, Videos, MaisVideos } from "./styles";

import {useDispatch, useSelector} from 'react-redux'

import { setLatestVideos } from "../../redux/videos/slice";
import { useEffect } from "react";

function Home() {

    const dispatch = useDispatch()

    const {latestVideos} = useSelector(rootReducer => rootReducer.videos)

    useEffect(() => {
        dispatch(setLatestVideos())
    }, [dispatch])

    return ( 
        <Container>
            <Header/>
            <ContentHome>
                <h2>
                    Ultimos vídeos
                </h2>
                <Videos>
                    {latestVideos.length > 0 && latestVideos.map( (video, index) => (
                        <article>
                            <iframe
                                key={index}
                                src={`https://www.youtube.com/embed/${video.videoId}`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            />
                        </article>
                    ))}
                </Videos>

                <MaisVideos href="https://www.youtube.com/@Renatows" target="_blank">
                    Canal do Youtube
                </MaisVideos>
            </ContentHome>
        </Container>
     );
}

export default Home;