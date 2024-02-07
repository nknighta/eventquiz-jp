import Layout from "../../layout/main";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
export default function QuizPage1() {
    const [typingStatus, setTypingStatus] = useState(0);
    return (
        <Layout>
            <TypeAnimation
                style={{ whiteSpace: 'pre-line', display: 'block' }}
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
                speed={50}
            />

            {typingStatus == 2 ? (
                <div style={{
                    padding: "10px 20px"
                }}>
                    <div>
                        <a
                            href="/quiz/1"
                            style={{
                                textDecorationLine: "underline",
                                color: "#000000",
                                fontSize: "1.2em",
                            }}>
                            次へ {">>"}
                        </a>
                    </div>
                    <div>
                        <a
                            href="/quiz/1"
                            style={{
                                textDecorationLine: "underline",
                                color: "#000000",
                                fontSize: "1.2em",
                            }}>
                            次へ {">>"}
                        </a>
                    </div>
                </div>
            ) : ('')}
        </Layout>
    )
}