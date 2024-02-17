import Layout from "../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Scolloer from "../../content/scolloer";
import HMeta from "../../content/hmeta";

export default function QuizPage1() {
    const [typingStatus, setTypingStatus] = useState(0);

    return (

        <Layout>

            <HMeta />
            <div>
                {/** 2回目以降は?load=trueでアニメーション停止 */}
                <p>(タップでスキップ)</p>
                <Scolloer>
                    <Image src="/robot_1.jpg" height={300} width={300} alt="robot" />
                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', display: 'block', }}
                        sequence={[
                            `        
                    ソーンダイク警部「なんだこれは！」
                    ソーンダイク警部「彼は自分のラボにこんな義体を隠してたのか…」
                    主人公「これでミリアは物理的に物事を行えるということになりましたね」
					`,
                            () => {
                                setTypingStatus(2);
                            }
                        ]}
                        cursor={false}
                        speed={80}
                    />
                </Scolloer>
            </div>
            {typingStatus == 2 ? (
                <Link
                    style={{
                        color: "black",
                        textDecoration: "none",
                    }}
                    href={"/story/millia"}>
                    次へ
                </Link>
            ) : ("")}
        </Layout >
    )
}