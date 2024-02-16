import Layout from "../layout/main";
import { quizlist } from "../content/quiz";
import { Router, useRouter } from "next/router";
import Link from "next/link";


const QuizPage = () => {
    const router = useRouter();

    return (
        <Layout>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 60,
                height: "60vh",
            }}>
                CID 謎解き
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 40,
            }}>
                <Link href="/second" style={{
                    color: "black",
                }}>
                    スタート
                </Link>
            </div>
        </Layout>
    )
}
export default QuizPage;