import { TypeAnimation } from "react-type-animation";
import Layout from "../layout/main";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scolloer from "../content/scolloer";
import HMeta from "../content/hmeta";

const Chat = ({ anibefore, aniafter }) => {
    const [typingStatus, setTypingStatus] = useState(0);
    const router = useRouter();
    const { load } = router.query;

    return (
        <>
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {load ?
                        (
                            anibefore
                        )
                        : (
                            aniafter
                        )}
                </Scolloer>
            </div>
        </>
    )
}


export default Chat;
