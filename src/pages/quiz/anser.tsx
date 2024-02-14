import Layout from "../../layout/main";
import { quizlist } from "../../content/quiz";
import { Router, useRouter } from "next/router";

const QuizPage = () => {
    const router = useRouter();
    const truth = router.query.mode;
    return (
        <Layout>
            <div
                style={{
                    color  : "#00ff00"
                }}>
                {truth === '1' ? (
                    <Fail />
                )   : (<Succes />)}
            </div>
        </Layout>
    );
};


const Fail = () => {
    const router = useRouter();
    const callbackid = router.query.id;
    return (
        <>
            Fail...

            <button onClick={() => {
                router.push(`/quiz?id=${callbackid}`)
            }}>
                戻る
            </button>
        </>
    )
}

const Succes = () => {
    const router = useRouter();

    return (
        <>
            Succes!!

            <button>
                戻る
            </button>
        </>
    )
}
export default QuizPage;