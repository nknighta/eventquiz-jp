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
                4
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
                                `4
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
                        justifyContent: "space-between"
                    }}>
                        {/** 2回目以降は?load=trueでアニメーション停止 */}
                        <div>
                            <Link
                                href="/?load=true"
                                style={{
                                    textDecoration: "none",
                                    color: "black"
                                }}>
                                {"<<"} 戻る
                            </Link>
                        </div>

                        <div style={{
                            height: "10vh",
                        }}>
                            <div>
                                <Link href={"/quiz/1/doctor-suicide"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    自殺の動機{" >>"}
                                </Link>
                            </div>
                            <div>
                                <Link href={"/quiz/1/computer"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    壊れたPC{" >>"}
                                </Link>
                            </div>
                            <div>
                                <Link href={"/quiz/1/sleep-medication"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    睡眠薬{" >>"}
                                </Link>
                            </div>
                            <div>
                                <Link href={"/quiz/1/doctor-suicide"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    数字{" >>"}
                                </Link>
                            </div>
                            
                            <div>
                                <Link href={"/quiz/1/doctor-suicide"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    ミリアについて{" >>"}
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : ('')}
            </div>
        </Layout >
    )
}