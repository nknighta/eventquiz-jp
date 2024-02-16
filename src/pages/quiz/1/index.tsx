import Layout from "../../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Scolloer from "../../../content/scolloer";
import HMeta from "../../../content/hmeta";

export default function QuizPage1() {
    const [typingStatus, setTypingStatus] = useState(0);

    const Content = () => {
        return (
            <>
                <br />
                私はソーンダイク警部と共に、ジョン博士の自殺を見ていくと、５つの疑問点があった。<br /> <br />
                １つ目は彼の自殺の動機。<br />
                ２つ目は不自然に壊され放置されたPC。<br />
                ３つ目は彼が自殺時に飲んだ薬について。<br />
                ４つ目はこのラボに点在する不自然な数字。<br /> <br />
                ５つ目は個人的な疑問だが、このラボについてミリアに聞いても、返答が無いことだ。さて、どれから調べていこうか <br />
            </>
        )
    }
    return (

        <Layout>

            <HMeta />
            <div
                onClick={() => {
                    setTypingStatus(2);
                }}>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    {typingStatus == 2 ? (<Content />) : (
                        <TypeAnimation
                            style={{ whiteSpace: 'pre-line', display: 'block', }}
                            sequence={[
                                `
                    私はソーンダイク警部と共に、ジョン博士の自殺を見ていくと、５つの疑問点があった。\n
                    １つ目は彼の自殺の動機。
                    ２つ目は不自然に壊され放置されたPC。
                    ３つ目は彼が自殺時に飲んだ薬について。
                    ４つ目はこのラボに点在する不自然な数字。\n
                        ５つ目は個人的な疑問だが、このラボについてミリアに聞いても、返答が無いことだ。さて、どれから調べていこうか
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
                                <Link href={"/quiz/1/repair"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    PCの修理{" >>"}
                                </Link>
                            </div>
                            <div>
                                <Link href={"/quiz/1/why-dead"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    死因の調査{" >>"}
                                </Link>
                            </div>
                            <div>
                                <Link href={"/story/dr-develop"}
                                    style={{
                                        textDecoration: "none",
                                        color: "#000"
                                    }}>
                                    研究の調査{" >>"}
                                </Link>
                            </div>
                            
                            <div>
                                <Link href={"/story/millia"}
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