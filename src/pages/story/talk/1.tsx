import { TypeAnimation } from "react-type-animation";
import Layout from "../../../layout/main";
import { useState } from "react";

const Chat = () => {
    const [typingStatus, setTypingStatus] = useState(0);
    return (
        <Layout>
            <div style={{
                padding: "20px 10px",
                color: "#000000",
                margin: "20px 10px",
                fontSize: '2em',
            }}>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        '男1',
                        () => {
                            setTypingStatus(1);
                        }
                    ]}
                    speed={50}
                    cursor={false}
                    style={{ display: 'inline-block', }}
                />
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                    sequence={[
                        `Line one\nLine Two\nLine Three\nLine Four\nLine Five Line Seven`,
                        () => {
                            setTypingStatus(2);
                        }
                    ]}
                    cursor={false}
                    speed={50}
                />
                
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', display: 'block' }}
                    sequence={[
                        `Line one\nLine Two\nLine Three\nLine Four\nLine Five Line Seven`,
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
                    <a
                        href="/quiz?id=1" 
                        style={{
                            textDecorationLine: "underline",
                            color: "#000000",
                            fontSize: "1.5em",
                        }}>
                        PCを修復する {"=>"}
                    </a>
                </div>
            ) : ('')}
        </Layout>
    )
}


export default Chat;