import PostTweetForm from "../components/post-tweet-form";
import { auth } from "../firebase";
import {styled} from "styled-components"

const Wrapper = styled.div``;

export default function Home(){
    const logOut = () => {}
    auth.signOut();
    return (
    <>
    <Wrapper>
        <PostTweetForm/>
    </Wrapper>
    </>
    )
}