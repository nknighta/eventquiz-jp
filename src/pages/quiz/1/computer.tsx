import Layout from "../../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import Scolloer from "../../../content/scolloer";
import HMeta from "../../../content/hmeta";

export default function Computer() {
    const [typingStatus, setTypingStatus] = useState(0);

    const Content = () => {
        return (
            <>
                <br />
                ノア博士とアインハードの話で彼が自殺する理由がはっきりしなかったな。お前はこの自殺どう思う？
            </>
        )
    }
    return (

        <Layout>
            <HMeta />
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}
                style={{
                    height: '77vh',
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {typingStatus == 2 ? (<Content />) : (
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', display: 'block', height: "100%" }}
                            sequence={[
                                `
                                    ノア博士とアインハードの話で彼が自殺する理由がはっきりしなかったな。お前はこの自殺どう思う？
                                    `,
                                () => {
                                    setTypingStatus(2);
                                }
                            ]}
                            cursor={false}
                            speed={80}
                        />)}
                </Scolloer>
                {typingStatus == 2 ? (
                    <div style={{
                        padding: "10px 20px",
                        display: "flex",
                        justifyContent: "end"
                    }}>
                        {/** 2回目以降は?load=trueでアニメーション停止 */}
                        <div>
                            <Link
                                href="/quiz/1/"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}>
                                {"<<"} 会話を終了する
                            </Link>
                        </div>
                    </div>
                ) : ('')}
            </div>
        </Layout >
    )
}