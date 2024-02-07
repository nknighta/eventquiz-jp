import { TypeAnimation } from "react-type-animation";
import Layout from "../layout/main";
import { useState } from "react";
import BasePath from "../scripts/basepath.tsx";

const Chat = () => {
    const [typingStatus, setTypingStatus] = useState(0);
    return (
        <Layout>
            <div style={{
                height: '80vh',
            }}>
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                    sequence={[
                        `2030年2月、私は上司のソーンダイク警部とともに、事故の調査に赴いていた。
						一緒にいるソーンダイク警部は科学を用いた捜査が得意な信頼できる方だ。\n
						今回の調査の主な概要はこうだ。自殺者はジョン・F・マッカーシー。\n
						世界初の汎用AI開発の第一人者であり、この世界で使われている汎用AI「ミリア(MiliA)」の開発者だ。\n そんな彼が彼の所有するラボで服薬自殺をしていたという。一見ただの自殺だとは思うが、違和感を覚えた私はソーンダイク警部に無理を言って、改めて現場の調査を行うことにした。
						`,
                        () => {
                            setTypingStatus(2);
                        }
                    ]}
                    cursor={false}
                    speed={50}
                />
                
            </div>
            {typingStatus == 2 ? (
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    padding: "10px 20px"
                }}>
                    <BasePath
                        pagepath="/quiz/1" 
                      >
                        次へ {">>"}
                    
                </BasePath>
		</div>
            ) : ('')}
        </Layout>
    )
}


export default Chat;
